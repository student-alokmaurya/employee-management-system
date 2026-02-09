import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update {

  employee: any = {};

  constructor(private employeeService: EmployeeService) {}

  updateEmployee() {
    this.employeeService.update(this.employee.eid, this.employee).subscribe({
      next: () => alert('Employee Updated'),
      error: () => alert('Update failed')
    });
  }
}
