import { ProductListComponent } from './../Product-List/product-list.component';
import { ProductDetailComponent } from '../Product-Detail/product-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from '../core/app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ProductListComponent ,ProductDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
