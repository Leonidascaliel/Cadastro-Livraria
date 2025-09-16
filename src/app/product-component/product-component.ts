import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent implements OnInit{

// Removed duplicate onClickUpdate method
  
  products: Product[] = [];
  formGroupProduct: FormGroup;
  isEditing: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private service: ProductService) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      autor: [''],
      editora: [''],
      description: [''],
      ano: [''],
      price: [''],
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
        this.isEditing = false;
      }
    });
  }

  onClickDelete(product: Product) {
    this.service.delete(product).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== product.id);
      }
    });
  }

  onClickUpdate(product: Product) {
    this.formGroupProduct.setValue(product);
    this.isEditing = true;
  }
  update() {
    this.service.update(this.formGroupProduct.value).subscribe({
      next: json => {
        let index = this.products.findIndex(p => p.id == json.id);
        this.products[index] = json;
        this.formGroupProduct.reset();
        this.isEditing = false;
      }
    });
  }
}
