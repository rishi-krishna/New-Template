// customer-table.component.ts
import { Component, inject } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent {
  customerService = inject(CustomerService);
  customers$ = this.customerService.getCustomers();
}