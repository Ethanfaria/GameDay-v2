package com.gameday.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tournaments")
public class Tournament {
    @Id
    private String tournamentId;
    private String name;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "ground_id", nullable = false)
    private Ground ground;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int maxParticipants;
    private String description;
    private String imageUrl;
    private LocalDateTime createdAt;
}
