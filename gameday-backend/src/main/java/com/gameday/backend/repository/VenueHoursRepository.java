package com.gameday.backend.repository;

import com.gameday.backend.model.VenueHours;
import com.gameday.backend.model.VenueHoursId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.DayOfWeek;
import java.util.Optional;

public interface VenueHoursRepository extends JpaRepository<VenueHours, VenueHoursId>{
    Optional<VenueHours> findById_GroundIdAndId_Day(String groundId, DayOfWeek day);
}
