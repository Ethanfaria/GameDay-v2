package com.gameday.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "venue_hours")
public class VenueHours {

    @EmbeddedId
    private VenueHoursId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("groundId")
    @JoinColumn(name = "ground_id", nullable = false)
    private Ground ground;

    @Column(name = "open_time", nullable = false)
    private LocalTime openTime;

    @Column(name = "close_time", nullable = false)
    private LocalTime closeTime;
}
