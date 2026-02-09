import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service/employee-service';
import { RouterLink } from '@angular/router';
import { Navbar } from "../navbar/navbar";


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, Navbar],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  employee = {
    ename: '',
    eemail: '',
    epassword: '',
    role: ''
  };

  constructor(private employeeService: EmployeeService) {}

  signup() {
  console.log(this.employee);

  this.employeeService.signup(this.employee).subscribe({
    next: (res) => {
      alert('Signup Successful');

      //  form clear
      this.employee = {
        ename: '',
        eemail: '',
        epassword: '',
        role: ''
      };
    },
    error: (err) => {
      console.error(err);
      alert('Signup Failed');
    }
  });
}

}
