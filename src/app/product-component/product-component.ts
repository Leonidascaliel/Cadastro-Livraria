import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent implements OnInit{
  
  products: product[] = [];
  formGroupProduct: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private service: ProductService) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      ano: [''],
      editora: [''],
      autor: ['']
    })

  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: json => this.products = json
    }
    );
  }
  save() {
    this.service.save(this.formGroupProduct.value).subscribe({
      next: json => {
        this.products.push(json);
        this.formGroupProduct.reset();
      }
    });
  }
}

