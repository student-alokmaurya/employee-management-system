import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employee-service/employee-service';



@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], // REQUIRED for *ngFor
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        console.log(data); // DEBUG
        this.employees = data;
      },
      error: (err) => {
        console.error('Error fetching employees', err);
      }
    });
  }
}
