package com.gameday.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(
        name = "bookings",
        uniqueConstraints = @UniqueConstraint(
                columnNames = {"ground_id", "booking_date", "slot_id"}
        )
)
public class Booking {

    @Id
    @Column(name = "booking_id", length = 16)
    private String bookingId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ground_id", nullable = false)
    private Ground ground;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "slot_id", nullable = false)
    private TimeSlot timeSlot;

    @Column(name = "booking_date", nullable = false)
    private LocalDate bookingDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal amount;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Booking() {}

    public Booking(String bookingId, Ground ground, User user, TimeSlot timeSlot,
                   LocalDate bookingDate, Status status,
                   BigDecimal amount, LocalDateTime createdAt) {
        this.bookingId = bookingId;
        this.ground = ground;
        this.user = user;
        this.timeSlot = timeSlot;
        this.bookingDate = bookingDate;
        this.status = status;
        this.amount = amount;
        this.createdAt = createdAt;
    }
}
