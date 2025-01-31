// customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private apiUrl = 'assets/mock-customers.json';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}