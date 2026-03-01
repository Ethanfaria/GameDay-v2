package com.gameday.backend.repository;

import com.gameday.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, String> {

    @Query("""
    SELECT b.startTime
    FROM Booking b
    WHERE b.ground.groundId = :groundId
    AND b.bookingDate = :date
    AND b.status != 'CANCELLED'
    """)
    List<LocalTime> findBookedStartTimesByGroundAndDate(
            @Param("groundId") String groundId,
            @Param("date") LocalDate date
    );

    @Query("""
    SELECT b
    FROM Booking b
    JOIN FETCH b.ground
    WHERE b.user.userId = :userId
    ORDER BY b.bookingDate DESC, b.startTime DESC
    """)
    List<Booking> findByUserIdWithDetails(@Param("userId") String userId);
}
