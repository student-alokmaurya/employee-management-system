package com.management.repository;

import com.management.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderEntityRepo extends JpaRepository<OrderEntity, Long> {
}
