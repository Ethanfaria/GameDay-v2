package com.gameday.backend.controller;

import com.gameday.backend.dto.FacilityDetailsDTO;
import com.gameday.backend.dto.GroundDTO;
import com.gameday.backend.model.Facility;
import com.gameday.backend.repository.FacilityRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/facilities")
public class FacilityDetailsController {

    private final FacilityRepository facilityRepository;

    public FacilityDetailsController(FacilityRepository facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    @GetMapping("/{id}")
    public FacilityDetailsDTO getFacility(@PathVariable String id) {
        Facility f = facilityRepository.findFacilityWithGrounds(id);

        if (f == null) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Facility not found"
            );
        }

        return mapToDTO(f);
    }

    private FacilityDetailsDTO mapToDTO(Facility f) {
        return new FacilityDetailsDTO(
                f.getFacilityId(),
                f.getFacilityName(),
                f.getLocation(),
                f.getImageUrl(),
                f.getGrounds()
                        .stream()
                        .map(g -> new GroundDTO(
                                g.getGroundId(),
                                g.getName(),
                                g.getSport().name(),
                                g.getLength(),
                                g.getBreadth(),
                                g.getHourlyRate()
                        ))
                        .toList()
        );
    }
}
