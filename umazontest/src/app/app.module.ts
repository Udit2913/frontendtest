import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { UsersDataService } from './services/users-data.service';
import { ProductsComponent } from './products/products.component';
import { ProductsDataService } from './services/products-data.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array
    RouterModule // Include RouterModule in imports
  ],
  providers: [UsersDataService, ProductsDataService],
  bootstrap: [AppComponent, ProductsComponent]
})
export class AppModule { }