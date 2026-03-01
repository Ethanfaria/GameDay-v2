package com.gameday.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequestDTO {
    private String groundId;
    private String userId;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDate bookingDate;
}
