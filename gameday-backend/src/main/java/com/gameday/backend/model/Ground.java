package com.gameday.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "grounds")
public class Ground{
        @Id
        @Column(name = "ground_id", length=16)
        private String groundId;
        @ManyToOne (fetch = FetchType.LAZY)
        @JoinColumn(name = "facility_id", nullable = false)
        private Facility facility;
        @Column(nullable = false, length = 100)
        private String name;
        @Enumerated(EnumType.STRING)
        private Sport sport = Sport.MULTI;
        private BigDecimal length;
        private BigDecimal breadth;
        @Column(name = "hourly_price", nullable = false)
        private BigDecimal hourlyRate;
        @Column(name = "is_active")
        private boolean isActive=true;
        @Column(name = "created_at")
        private LocalDateTime createdAt;


        public Ground(){}
        public Ground(String groundId, Facility facility, String name, Sport sport,
                      BigDecimal length, BigDecimal breadth, BigDecimal hourlyRate,
                      boolean isActive) {
                this.groundId = groundId;
                this.facility = facility;
                this.name = name;
                this.sport = sport;
                this.length = length;
                this.breadth = breadth;
                this.hourlyRate = hourlyRate;
                this.isActive = isActive;
        }

        @PrePersist
        protected void onCreate() {
                this.createdAt = LocalDateTime.now();
        }
}
