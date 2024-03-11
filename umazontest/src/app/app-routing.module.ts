import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // { path: 'products', component: ProductsComponent },
  // other routes
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    component:ProductsComponent,
    path:'products'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
