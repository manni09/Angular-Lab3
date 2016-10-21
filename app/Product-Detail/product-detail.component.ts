import { Product } from '../shared/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-product-detail', 
  templateUrl: '/app/Product-Detail/productDetail.html',
})
export class ProductDetailComponent {
    @Input()
    product: Product;
}