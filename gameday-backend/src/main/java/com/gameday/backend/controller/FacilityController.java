package com.gameday.backend.controller;

import com.gameday.backend.dto.FacilityCardDTO;
import com.gameday.backend.repository.FacilityRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facilities")
public class FacilityController {

    private final FacilityRepository facilityRepository;

    public FacilityController(FacilityRepository facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    @GetMapping
    public List<FacilityCardDTO> getAllFacilities() {
        return facilityRepository.findFacilityCards();
    }
}
