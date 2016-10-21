import { Product } from './../shared/Product';
import { Products } from './../shared/mock-products';
import { Injectable } from '@angular/core';




@Injectable()
export class ProductService {
    getProducts(): Product[] { 
        return Products;
    } // stub
}