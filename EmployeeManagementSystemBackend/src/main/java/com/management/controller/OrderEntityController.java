package com.management.controller;

import com.management.dto.OrderRequest;
import com.management.dto.TransactionSummaryResponse;
import com.management.service.imp.OrderServiceImp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderEntityController {


    private final OrderServiceImp orderServiceImp;

    public OrderEntityController(OrderServiceImp orderServiceImp){
        this.orderServiceImp = orderServiceImp;
    }

    @PostMapping("/create")
    public ResponseEntity<TransactionSummaryResponse> placeOrder(
            @RequestBody OrderRequest orderRequest){

        return ResponseEntity.ok(orderServiceImp
                .createOrder(orderRequest));

    }

}
