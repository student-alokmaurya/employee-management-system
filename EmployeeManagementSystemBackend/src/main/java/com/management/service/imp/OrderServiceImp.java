package com.management.service.imp;

import com.management.dto.OrderRequest;
import com.management.dto.TransactionSummaryResponse;

public interface OrderServiceImp {

    TransactionSummaryResponse createOrder(OrderRequest orderRequest);
}
