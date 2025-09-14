<<<<<<< HEAD

=======
>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';
<<<<<<< HEAD
=======
import { ProductComponent } from './product-component/product-component';


>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
  apiUrl = "http://localhost:3000/products";
=======
  apiUrl = "http://localhost:4200/products";
>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  save(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }
  
}
