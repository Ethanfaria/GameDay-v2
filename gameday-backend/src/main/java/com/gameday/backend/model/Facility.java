package com.gameday.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "facilities")
public class Facility {
    @Id
    @Column(name = "facility_id", length=16)
    private String facilityId;
    @Column(name="name",nullable = false, length=100)
    private String facilityName;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String location;
    private String description;
    private String image_url;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;
    @Column(name = "is_active")
    private boolean isActive=true;
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public Facility(){}

    public Facility(String facilityId, String facilityName, String location, User owner, boolean isActive, LocalDateTime createdAt) {
        this.facilityId = facilityId;
        this.facilityName = facilityName;
        this.location = location;
        this.owner = owner;
        this.isActive = isActive;
        this.createdAt = createdAt;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

}
