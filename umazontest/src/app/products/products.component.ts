import { Component } from '@angular/core';

import { ProductsDataService } from '../services/products-data.service';
interface Product {
  pname: string;
  pgroup: string;
  prodid: number | null;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
 

  export class ProductsComponent {
    title = 'umazontest';
    products: any;
    newProduct: Product = {
      pname: '',
      pgroup: '',
      prodid: null
    };
  
   
  constructor(private productData: ProductsDataService) {
    this.refreshProducts();
  }
 
  addProduct() {
    this.productData.addProduct(this.newProduct).subscribe(
      response => {
        console.log("Product added successfully:", response);
        this.refreshProducts(); // Refresh the products list
        this.resetForm();
      },
      error => {
        console.error("Error adding user:", error);
        // Handle errors appropriately
      }
    );
  }
 
  private refreshProducts() {
    this.productData.getProducts().subscribe((data) => {
      console.warn(" productsdata", data);
      this.products = data;
    });
  }
 
  onSubmit() {
    this.addProduct();
  }
 
  private resetForm() {
    this.newProduct = {
      pname: '',
      pgroup: '',
      prodid: null
    };
  }
}