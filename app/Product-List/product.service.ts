import { Product } from './../shared/Product';
import { Products } from './../shared/mock-products';
import { Injectable } from '@angular/core';




@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(Products);
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise<Product[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getProducts());
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts().then(Products => Products.find(Product => Product.id === id));
    }
}