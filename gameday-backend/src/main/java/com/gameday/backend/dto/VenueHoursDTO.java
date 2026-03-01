package com.gameday.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class VenueHoursDTO {
    private String openTime;
    private String closeTime;
}