import { Product } from './../shared/Product';
import { OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../shared/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-product-list',
  templateUrl: '/app/Product-List/productList.html',
  providers: [ProductService]
})
export class ProductListComponent {
  products: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}