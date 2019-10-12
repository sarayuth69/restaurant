import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutomermenuComponent } from './cutomermenu.component';


const routes: Routes = [
  {path:"",component : CutomermenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomermenuRoutingModule { }
