import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';
import { ProductComponent } from './product-component/product-component';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost:4200/products";
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  save(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }
  
}
