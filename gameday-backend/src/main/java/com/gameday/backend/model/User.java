package com.gameday.backend.model;

import java.time.LocalDateTime;

public class User {
    private int userId;
    private String email;
    private String name;
    private String phone;
    private String passwordHash;
    private Role role = Role.PLAYER;
    private LocalDateTime createdAt;
}
