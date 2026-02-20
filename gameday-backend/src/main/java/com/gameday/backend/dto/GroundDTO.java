package com.gameday.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
public class GroundDTO {

    private String groundId;
    private String name;
    private String sport;
    private BigDecimal length;
    private BigDecimal breadth;
    private BigDecimal hourlyPrice;
}
