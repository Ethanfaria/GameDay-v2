package com.gameday.backend.service;

import com.gameday.backend.dto.AuthResponse;
import com.gameday.backend.dto.RegisterRequest;
import com.gameday.backend.model.User;
import com.gameday.backend.repository.UserRepository;
import com.gameday.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.findByEmail(req.email()).isPresent())
            throw new RuntimeException("Email already in use");

        User user = new User(
                UUID.randomUUID().toString().replace("-", "").substring(0, 16),
                req.email(),
                req.name(),
                req.phone(),
                passwordEncoder.encode(req.password())
        );
        userRepository.save(user);
        return new AuthResponse(jwtUtil.generateToken(user), user.getUserId(), user.getName(), user.getRole().name());
    }

    public AuthResponse login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if (!passwordEncoder.matches(password, user.getPasswordHash()))
            throw new RuntimeException("Invalid credentials");
        return new AuthResponse(jwtUtil.generateToken(user), user.getUserId(), user.getName(), user.getRole().name());
    }
}