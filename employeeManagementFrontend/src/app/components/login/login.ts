import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service/employee-service';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from "../navbar/navbar";



@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, Navbar],
  standalone: true, 
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  eid!: number;
  epassword!: string;

  constructor(private employeeService: EmployeeService, 
    private router: Router) {}

  login() {
    this.employeeService.login(this.eid, this.epassword)
      .subscribe({
        next: (res) => {
          alert(res); // Login Successful
          this.router.navigate(['/employeeProfile']);
        },
        error: () => {
          alert('Invalid Password');
        }
      });
  }

}
