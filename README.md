Instrucitons:
## Prerequisites
- Node.js v18+
- Angular CLI v19
```bash
npm install -g @angular/cli@latest

Installation:
1) Clone repository
git clone https://github.com/your-username/customer-info.git
cd customer-info

2) Install dependencies
npm install

Development:
1) Start dev server
ng serve --open

2) Project structure

src/
├── app/
│   ├── customer-table/
│   │   ├── customer-table.component.html
│   │   ├── customer-table.component.scss
│   │   └── customer-table.component.ts
│   ├── customer.service.ts
│   └── app.component.ts
├── assets/
│   └── mock-customers.json
├── app.config.ts
└── main.ts

Configuration:
1) Modify Data
[
  {
    "id": 1,
    "name": "New Customer",
    "mobile": "000-000-0000",
    "email": "new@example.com"
  }
]
