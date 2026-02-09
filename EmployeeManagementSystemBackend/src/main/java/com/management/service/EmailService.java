package com.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Async
    public void sendOrderConfirmation(String toEmail, Long orderId){
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);
        message.setSubject("Order Confirmation " + orderId);
        message.setText("Thank you for your purchase! Your Order ID is: " + orderId);
        mailSender.send(message);
        System.out.println("Email sent successfully");
    }
}
