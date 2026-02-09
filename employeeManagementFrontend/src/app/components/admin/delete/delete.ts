import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {

  eId!: number;

  constructor(private employeeService: EmployeeService) {}

  deleteEmployee() {
  this.employeeService.delete(this.eId).subscribe({
    next: (res: string) => {
      alert(res);              //  backend message show
      this.eId = null as any; 
    },
    error: (err) => {
      console.error(err);
      alert('Delete failed');
    }
  });
}

}

