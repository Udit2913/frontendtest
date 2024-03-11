import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private url = "http://localhost:8081/api/v1/products";
 
  constructor(private http: HttpClient) { }
 
  // Get products
  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
 
  // Add products
  addProduct(product: any): Observable<any> {
    const addProductUrl = "http://localhost:8081/api/v1/addProduct";
    return this.http.post(addProductUrl, product);
  }
}