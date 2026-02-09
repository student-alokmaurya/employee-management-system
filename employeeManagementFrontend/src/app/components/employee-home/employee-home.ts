import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";


@Component({
  selector: 'app-employee-home',
  standalone: true,
  templateUrl: './employee-home.html',
  styleUrl: './employee-home.css',
  imports: [Navbar],
})
export class EmployeeHome {

}
