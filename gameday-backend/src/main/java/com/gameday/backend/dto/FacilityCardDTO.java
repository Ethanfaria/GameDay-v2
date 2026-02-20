package com.gameday.backend.dto;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class FacilityCardDTO {

    private final String facilityId;
    private final String name;
    private final String location;
    private final String imageUrl;
    private final BigDecimal startingPrice;

    public FacilityCardDTO(String facilityId, String name,
                           String location, String imageUrl,
                           BigDecimal startingPrice) {
        this.facilityId = facilityId;
        this.name = name;
        this.location = location;
        this.imageUrl = imageUrl;
        this.startingPrice = startingPrice;
    }
}
