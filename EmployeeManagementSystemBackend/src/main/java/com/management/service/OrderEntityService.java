package com.management.service;

import com.management.dto.OrderRequest;
import com.management.dto.TransactionSummaryResponse;
import com.management.entity.OrderEntity;
import com.management.entity.PaymentEntity;
import com.management.repository.OrderEntityRepo;
import com.management.service.imp.OrderServiceImp;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderEntityService implements OrderServiceImp {

    @Autowired
    private OrderEntityRepo orderEntityRepo;

    @Autowired
    private PaymentEntityService paymentEntityService;

    @Autowired
    private EmailService emailService;

    @Transactional
    public TransactionSummaryResponse createOrder(OrderRequest orderRequest){

        // Create and Save Order
        OrderEntity order = new OrderEntity();
        order.setCustomerEmail(orderRequest.getCustomerEmail());
        order.setTotalAmount(orderRequest.getTotalAmount());
        order.setStatus("CREATED");

        order = orderEntityRepo.save(order);
        System.out.println("Order saver successfully");

        // Process Mock Payment
        PaymentEntity payment = paymentEntityService.processPayment(order);
        System.out.println("Payment processed");

        // Update Order Status
        order.setStatus("COMPLETED");
        orderEntityRepo.save(order);


        // send mail
        emailService.sendOrderConfirmation(
                order.getCustomerEmail(),
                order.getId());
        System.out.println("Email sent");

        // Transaction Summary
        return new TransactionSummaryResponse(
                order.getId(),
                order.getTotalAmount(),
                payment.getPaymentStatus(),
                "Order placed successfully");



    }

}
