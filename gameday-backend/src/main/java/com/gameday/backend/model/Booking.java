package com.gameday.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(
        name = "bookings",
        uniqueConstraints = @UniqueConstraint(
                columnNames = {"ground_id", "booking_date", "start_time", "end_time"}
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

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

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

    public Booking(String bookingId, Ground ground, User user, LocalTime startTime, LocalTime endTime,
                   LocalDate bookingDate, Status status,
                   BigDecimal amount, LocalDateTime createdAt) {
        this.bookingId = bookingId;
        this.ground = ground;
        this.user = user;
        this.startTime = startTime;
        this.endTime = endTime;
        this.bookingDate = bookingDate;
        this.status = status;
        this.amount = amount;
        this.createdAt = createdAt;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
