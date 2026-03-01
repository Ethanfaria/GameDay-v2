package com.gameday.backend.repository;

import com.gameday.backend.model.Ground;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroundRepository extends JpaRepository<Ground, String> {
}
