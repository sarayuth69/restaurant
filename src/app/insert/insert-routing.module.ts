import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert.component';


const routes: Routes = [
  {path:"",component:InsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertRoutingModule { }
