import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, AddProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
