import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooditemsComponent } from './fooditems.component';


const routes: Routes = [
  {path:"",component:FooditemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooditemsRoutingModule { }
