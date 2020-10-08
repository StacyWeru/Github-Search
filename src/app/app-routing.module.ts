import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RepositoryComponent} from "./repository/repository.component";
import{ UsersComponent} from "../app/user/user.component";
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path:" home" , component:HomeComponent},
  { path:" nav-bar" , component:NavBarComponent},
  { path:" repository " , component:RepositoryComponent},
  { path:" user" , component:UsersComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
