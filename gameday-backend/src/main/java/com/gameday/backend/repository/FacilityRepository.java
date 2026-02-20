package com.gameday.backend.repository;

import com.gameday.backend.dto.FacilityCardDTO;
import com.gameday.backend.model.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FacilityRepository extends JpaRepository<Facility, String> {

    @Query("""
    SELECT new com.gameday.backend.dto.FacilityCardDTO(
        f.facilityId,
        f.facilityName,
        f.location,
        f.imageUrl,
        MIN(g.hourlyRate)
    )
    FROM Facility f
    LEFT JOIN f.grounds g
    GROUP BY f.facilityId, f.facilityName, f.location, f.imageUrl
    """)
    List<FacilityCardDTO> findFacilityCards();
    @Query("""
    SELECT f
    FROM Facility f
    LEFT JOIN FETCH f.grounds
    WHERE f.facilityId = :id
    """)
    Facility findFacilityWithGrounds(String id);


}
