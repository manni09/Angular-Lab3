import { calculatePrice } from './../Product-Detail/calculatePrice.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../core/app.component';
import { ProductListComponent } from './../Product-List/product-list.component';
import { ProductDetailComponent } from '../Product-Detail/product-detail.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      { 
        path: 'products', 
        component: ProductListComponent
      },
      { 
        path: 'product/detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [AppComponent, DashboardComponent, ProductListComponent, ProductDetailComponent, calculatePrice],
  bootstrap: [AppComponent]
})
export class AppModule { }
