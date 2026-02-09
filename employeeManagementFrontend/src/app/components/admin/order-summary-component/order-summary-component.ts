import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../employee-service/employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-summary-component.html',
  styleUrl: './order-summary-component.css',
})
export class OrderSummaryComponent implements OnInit {

  summary: any;

  order = {
    customerEmail: '',
    totalAmount: null
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.summary = history.state.summary;

    if (!this.summary) {
      console.warn('No order summary found');
    }
  }

  placeOrder() {
  console.log('Sending to backend:', this.order);

  this.employeeService.placeOrder(this.order).subscribe({
    next: (res) => {
      console.log('Order Summary:', res);

      
      this.summary = res;


      this.order = {
        customerEmail: '',
        totalAmount: null
      };
    },
    error: (err) => {
      console.error(err);
      alert('Order failed');
    }
  });
}

}
