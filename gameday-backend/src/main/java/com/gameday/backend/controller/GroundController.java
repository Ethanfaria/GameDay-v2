package com.gameday.backend.controller;

import com.gameday.backend.dto.VenueHoursDTO;
import com.gameday.backend.model.VenueHours;
import com.gameday.backend.model.VenueHoursId;
import com.gameday.backend.repository.VenueHoursRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.Map;

@RestController
@RequestMapping("/api/grounds")
public class GroundController {

    private final VenueHoursRepository venueHoursRepository;

    public GroundController(VenueHoursRepository venueHoursRepository) {
        this.venueHoursRepository = venueHoursRepository;
    }

    @GetMapping("/{groundId}/hours")
    public ResponseEntity<?> getGroundHours(
            @PathVariable String groundId,
            @RequestParam String day
    ) {
        DayOfWeek dayOfWeek = DayOfWeek.valueOf(day.toUpperCase());
        return venueHoursRepository
                .findById_GroundIdAndId_Day(groundId, dayOfWeek)
                .map(h -> ResponseEntity.ok(new VenueHoursDTO(
                        h.getOpenTime().toString(),
                        h.getCloseTime().toString()
                )))
                .orElse(ResponseEntity.notFound().build());
    }
}