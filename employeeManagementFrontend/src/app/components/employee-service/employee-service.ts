import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {


  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // SIGNUP
  signup(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, employee);
  }

  // LOGIN
  login(eid: number, epassword: string): Observable<string> {
    return this.http.post(
      `${this.baseUrl}/login/${eid}`,
      { eid, epassword },
      { responseType: 'text' }
    );
  }

  // GET ALL
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  // GET BY ID
  getById(eid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-by/${eid}`);
  }

  // UPDATE
  update(eid: number, employee: any): Observable<string> {
    return this.http.put(
      `${this.baseUrl}/update-by/${eid}`,
      employee,
      { responseType: 'text' }
    );
  }

  // DELETE
  delete(eid: number): Observable<string> {
    return this.http.delete(
      `${this.baseUrl}/delete-by/${eid}`,
      { responseType: 'text' }
    );
  }


  //place Order
  placeOrder(orderData: any): Observable<any> {
  return this.http.post<any>(
    `${this.baseUrl}/api/orders/create`,
    orderData
  );
}


}
