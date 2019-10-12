import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertRoutingModule } from './insert-routing.module';
import { InsertComponent } from './insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertComponent],
  imports: [
    CommonModule,
    InsertRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InsertModule { }
