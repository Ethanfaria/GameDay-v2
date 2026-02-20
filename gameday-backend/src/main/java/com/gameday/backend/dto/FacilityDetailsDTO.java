package com.gameday.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class FacilityDetailsDTO {

    private String facilityId;
    private String name;
    private String location;
    private String imageUrl;
    private List<GroundDTO> grounds;
}
