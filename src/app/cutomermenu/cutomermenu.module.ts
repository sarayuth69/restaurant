import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomermenuRoutingModule } from './cutomermenu-routing.module';
import { CutomermenuComponent } from './cutomermenu.component';


@NgModule({
  declarations: [CutomermenuComponent],
  imports: [
    CommonModule,
    CutomermenuRoutingModule
  ]
})
export class CutomermenuModule { }
