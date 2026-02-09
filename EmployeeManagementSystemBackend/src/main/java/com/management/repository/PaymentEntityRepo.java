package com.management.repository;

import com.management.entity.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentEntityRepo extends JpaRepository<PaymentEntity, Long> {
}
