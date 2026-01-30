package com.gameday.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id", length=16)
    private String userId;
    @Column(unique = true, nullable = false)
    private String email;
    private String name;
    private String phone;
    @Column(name = "password_hash")
    private String passwordHash;
    @Enumerated(EnumType.STRING)
    private Role role;
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public User(){}

    public User(String userId, String email, String name, String phone, String passwordHash) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.passwordHash = passwordHash;
        this.role = Role.PLAYER;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

}
