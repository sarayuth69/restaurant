import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "cutomermenu", loadChildren: "./cutomermenu/cutomermenu.module#CutomermenuModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "edit", loadChildren: "./edit/edit.module#EditModule" },
  { path: "fooditems", loadChildren: "./fooditems/fooditems.module#FooditemsModule" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "insert", loadChildren: "./insert/insert.module#InsertModule" },
  { path: "menu", loadChildren: "./menu/menu.module#MenuModule" },
  { path: "register", loadChildren: "./register/register.module#RegisterModule" },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
