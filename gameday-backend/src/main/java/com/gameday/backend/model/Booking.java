package com.gameday.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    private String bookingId;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "ground_id", nullable = false)
    private Ground ground;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "slot_id", nullable = false)
    private TimeSlot timeSlot;
    private LocalDateTime bookingDate;
    @Enumerated(EnumType.STRING)
    private Status status;
    private BigDecimal amount;
    private LocalDateTime createdAt;

    public Booking(){}
    public Booking(String bookingId, Ground ground, User user, TimeSlot timeSlot, LocalDateTime bookingDate, Status status, BigDecimal amount, LocalDateTime createdAt) {
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
