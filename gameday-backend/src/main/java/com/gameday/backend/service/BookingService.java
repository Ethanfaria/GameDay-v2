package com.gameday.backend.service;

import com.gameday.backend.dto.BookingRequestDTO;
import com.gameday.backend.dto.BookingResponseDTO;
import com.gameday.backend.model.*;
import com.gameday.backend.repository.BookingRepository;
import com.gameday.backend.repository.GroundRepository;
import com.gameday.backend.repository.UserRepository;
import com.gameday.backend.repository.VenueHoursRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.TextStyle;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final GroundRepository groundRepository;
    private final UserRepository userRepository;
    private final VenueHoursRepository venueHoursRepository;

    public BookingService(BookingRepository bookingRepository,
                          GroundRepository groundRepository,
                          UserRepository userRepository,
                          VenueHoursRepository venueHoursRepository) {
        this.bookingRepository = bookingRepository;
        this.groundRepository = groundRepository;
        this.userRepository = userRepository;
        this.venueHoursRepository = venueHoursRepository;
    }

    public List<LocalTime> getBookedSlots(String groundId, LocalDate date) {
        return bookingRepository.findBookedStartTimesByGroundAndDate(groundId, date);
    }

    @Transactional
    public BookingResponseDTO createBooking(BookingRequestDTO request) {
        // Validate entities exist
        Ground ground = groundRepository.findById(request.getGroundId())
                .orElseThrow(() -> new RuntimeException("Ground not found"));

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        DayOfWeek day = request.getBookingDate().getDayOfWeek();

        VenueHours venueHours = venueHoursRepository.
                findById_GroundIdAndId_Day(request.getGroundId(),day)
                .orElseThrow(() -> new RuntimeException("Ground is closed on this day"));


        List<LocalTime> bookedSlots = getBookedSlots(request.getGroundId(), request.getBookingDate());
        if (bookedSlots.contains(request.getStartTime())) {
            throw new RuntimeException("This slot is already booked");
        }

        Booking booking = new Booking();
        booking.setBookingId(generateBookingId());
        booking.setGround(ground);
        booking.setUser(user);
        booking.setBookingDate(request.getBookingDate());
        booking.setStartTime(request.getStartTime());
        booking.setEndTime(request.getEndTime());
        booking.setStatus(Status.HELD);
        booking.setAmount(ground.getHourlyRate());

        booking = bookingRepository.save(booking);

        return new BookingResponseDTO(
                booking.getBookingId(),
                ground.getGroundId(),
                ground.getName(),
                booking.getBookingDate(),
                booking.getStartTime(),
                booking.getEndTime(),
                booking.getAmount(),
                booking.getStatus().name()
        );
    }

    public List<BookingResponseDTO> getUserBookings(String userId) {
        return bookingRepository.findByUserIdWithDetails(userId).stream()
                .map(booking -> new BookingResponseDTO(
                        booking.getBookingId(),
                        booking.getGround().getGroundId(),
                        booking.getGround().getName(),
                        booking.getBookingDate(),
                        booking.getStartTime(),
                        booking.getEndTime(),
                        booking.getAmount(),
                        booking.getStatus().name()
                ))
                .collect(Collectors.toList());
    }

    private String generateBookingId() {
        return UUID.randomUUID().toString().replace("-", "").substring(0, 16);
    }
}
