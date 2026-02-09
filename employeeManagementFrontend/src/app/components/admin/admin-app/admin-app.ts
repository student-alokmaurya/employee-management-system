import { Component } from '@angular/core';
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-admin-app',
  standalone: true,
  imports: [AdminSidebar, RouterOutlet],
  templateUrl: './admin-app.html',
  styleUrl: './admin-app.css',
})
export class AdminApp {

}
