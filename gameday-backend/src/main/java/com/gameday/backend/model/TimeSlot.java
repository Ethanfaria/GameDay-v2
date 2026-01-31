package com.gameday.backend.model;

import jakarta.persistence.*;

import java.time.LocalTime;

@Entity
@Table(name = "timeslots", uniqueConstraints = @UniqueConstraint(columnNames = {"start_time", "end_time"}))

public class TimeSlot {
    @Id
    @Column(name = "slot_id")
    private int slot_id;
    @Column(name = "start_time", nullable = false)
    private LocalTime start_time;
    @Column(name = "end_time", nullable = false)
    private LocalTime end_time;
}
