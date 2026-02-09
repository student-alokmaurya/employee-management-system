import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { EmployeeService } from '../../employee-service/employee-service';


@Component({
  selector: 'app-get-by-id',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-by-id.html',
  styleUrl: './get-by-id.css',
})
export class GetById {

  eId!: number;
  employee: any;

  constructor(private employeeService: EmployeeService) {}

  getEmployee() {
    if (!this.eId) {
      alert('Please enter Employee ID');
      return;
    }

    this.employeeService.getById(this.eId).subscribe({
      next: (data) => {
        console.log('GET BY ID RESPONSE:', data);
        this.employee = data;
      },
      error: () => {
        this.employee = null;
        alert('Employee not found');
      }
    });
  }
}
