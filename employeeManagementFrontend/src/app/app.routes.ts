import { Routes } from '@angular/router';
import { EmployeeHome } from './components/employee-home/employee-home';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Delete } from './components/admin/delete/delete';
import { Update } from './components/admin/update/update';
import { GetById } from './components/admin/get-by-id/get-by-id';
import { EmployeeList } from './components/admin/employee-list/employee-list';
import { EmployeeProfile } from './components/employee-profile/employee-profile';
import { AdminHome } from './components/admin/admin-home/admin-home';
import { AdminApp } from './components/admin/admin-app/admin-app';
import { OrderSummaryComponent } from './components/admin/order-summary-component/order-summary-component';

export const routes: Routes = [

  // PUBLIC PAGES
  { path: '', component: EmployeeHome },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'employeeProfile', component: EmployeeProfile },
  

  // ADMIN PAGES
  {
    path: 'admin',
    component: AdminApp,
    children: [
      { path:'', component:AdminHome},
      { path: 'employees', component: EmployeeList },
      { path: 'get', component: GetById },
      { path: 'update', component: Update },
      { path: 'delete', component: Delete },
      { path: 'orderSummaryComponent', component:OrderSummaryComponent},
    ]
  }
];
