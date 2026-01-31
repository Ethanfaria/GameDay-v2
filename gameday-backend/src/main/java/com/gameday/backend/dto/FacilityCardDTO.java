package com.gameday.backend.dto;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class FacilityCardDTO {

    private String facilityId;
    private String name;
    private String location;
    private String imageUrl;
    private BigDecimal startingPrice;

    public FacilityCardDTO(String facilityId, String name,
                           String location, String imageUrl,
                           BigDecimal startingPrice) {
        this.facilityId = facilityId;
        this.name = name;
        this.location = location;
        this.imageUrl = imageUrl;
        this.startingPrice = startingPrice;
    }

    // getters
}
