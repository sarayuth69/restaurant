import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooditemsRoutingModule } from './fooditems-routing.module';
import { FooditemsComponent } from './fooditems.component';


@NgModule({
  declarations: [FooditemsComponent],
  imports: [
    CommonModule,
    FooditemsRoutingModule
  ]
})
export class FooditemsModule { }
