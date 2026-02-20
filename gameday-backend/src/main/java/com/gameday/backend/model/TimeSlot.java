package com.gameday.backend.model;

import jakarta.persistence.*;

import java.time.LocalTime;

@Entity
@Table(
        name = "time_slots",
        uniqueConstraints = @UniqueConstraint(columnNames = {"start_time", "end_time"})
)
public class TimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "slot_id")
    private Integer slotId;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;
}
