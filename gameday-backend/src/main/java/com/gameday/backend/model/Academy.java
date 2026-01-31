package com.gameday.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Entity
@Table(name = "academies")
public class Academy {
    @Id
    @Column(name = "academy_id", length=16)
    private String academyId;
    @Column(name= "name", unique = true, nullable = false)
    private String academyName;
    @Enumerated(EnumType.STRING)
    private Level level;
    @Enumerated(EnumType.STRING)
    private AgeGroup ageGroup;
    @Column(name = "monthly_fee")
    private BigDecimal monthlyFee;
    @Column(name = "duration_months")
    private int duration;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "ground_id", nullable = false)
    private Ground ground;
    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;
    private String description;
    private String image_url;
    private LocalDateTime createdAt;

    public Academy(){}
    public Academy(String academyId, String academyName, Level level, AgeGroup ageGroup, BigDecimal monthlyFee,
                   int duration, Ground ground, User owner, String description, String imageUrl) {
        this.academyId = academyId;
        this.academyName = academyName;
        this.level = level;
        this.ageGroup = ageGroup;
        this.monthlyFee = monthlyFee;
        this.duration = duration;
        this.ground = ground;
        this.owner = owner;
        this.description = description;
        this.image_url = imageUrl;
    }

}
