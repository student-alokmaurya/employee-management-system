package com.management.dto;

import lombok.*;

import java.math.BigDecimal;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TransactionSummaryResponse {

    private Long orderId;
    private BigDecimal totalAmount;
    private String paymentStatus;
    private String message;
}
