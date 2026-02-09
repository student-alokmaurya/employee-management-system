package com.management.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Data
public class OrderRequest {

    private String customerEmail;
    private BigDecimal totalAmount;
}
