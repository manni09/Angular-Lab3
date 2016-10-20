import { Product } from './model/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-product-detail', 
  templateUrl: '/app/template/productDetail.html',
})
export class ProductDetailComponent {
    @Input()
    product: Product;
}