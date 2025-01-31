// app.component.ts
import { Component } from '@angular/core';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@Component({
  standalone: true,
  imports: [CustomerTableComponent],
  selector: 'app-root',
  template: `
    <div class="main-container">
      <h1>Customer Information</h1>
      <app-customer-table />
    </div>
  `,
  styles: `
    .main-container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 15px;
      
      h1 {
        color: #3276e0;
        font-size: 24px;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #eee;
      }
    }
  `
})
export class AppComponent {}