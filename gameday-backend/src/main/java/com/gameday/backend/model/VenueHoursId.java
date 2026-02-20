package com.gameday.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.DayOfWeek;

@Getter
@Setter
@Embeddable
public class VenueHoursId implements Serializable {

    @Column(name = "ground_id", length = 16)
    private String groundId;

    @Enumerated(EnumType.STRING)
    @Column(name = "day")
    private DayOfWeek day;
}
