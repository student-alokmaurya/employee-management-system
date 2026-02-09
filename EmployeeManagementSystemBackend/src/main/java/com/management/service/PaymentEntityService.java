package com.management.service;

import com.management.entity.OrderEntity;
import com.management.entity.PaymentEntity;
import com.management.repository.PaymentEntityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentEntityService {

    @Autowired
    private PaymentEntityRepo paymentEntityRepo;

    public PaymentEntity processPayment(OrderEntity orderEntity){
        PaymentEntity paymentEntity = new PaymentEntity();

        paymentEntity.setOrderId(orderEntity.getId());
        paymentEntity.setAmount(orderEntity.getTotalAmount());
        paymentEntity.setTransactionId("TXN-" + UUID.randomUUID().toString().substring(0,8));
        paymentEntity.setPaymentStatus("SUCCESS");
        paymentEntity.setPaymentMode("MOCK");

        paymentEntityRepo.save(paymentEntity);

        System.out.println("Payment processed: " + orderEntity.getId());

        return paymentEntity;
    }
}
