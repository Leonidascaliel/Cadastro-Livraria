import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { product } from './product';
import { ProductComponent } from './product-component/product-component';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost:4200/products";
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl);
  }
  save(product: product): Observable<product>{
    return this.http.post<product>(this.apiUrl, product);
  }
  
}
