import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {OrdersTableComponent} from './orders-table/orders-table.component';
import {CustomersComponent} from './customers/customers.component';
import {CreateProductsComponent} from './create-products/create-products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'products', component: AdminProductsComponent},
      {path: 'orders', component: OrdersTableComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'create-products', component: CreateProductsComponent},
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, AdminProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
