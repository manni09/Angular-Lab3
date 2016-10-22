import { Product } from './../shared/Product';
import { ProductService } from './product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-product-list',
  templateUrl: '/app/Product-List/productList.html',
  providers: [ProductService]
})
export class ProductListComponent {

  products: Product[];
  selectedProduct: Product;
  productLodding: boolean = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productLodding = true;
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsSlowly().then(products => this.products = products).then(() => this.productLodding = false);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}