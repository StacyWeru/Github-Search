import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';


import { NavBarComponent } from "./nav-bar/nav-bar.component";
import{ UsersComponent} from "../app/users/users.component";
import { RepositoryComponent} from "./repository/repository.component";
import {HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'nav-bar' , component:NavBarComponent},
  { path: 'users' , component:UsersComponent},
  { path:'repository', component:RepositoryComponent},
  { path:'**', component:NotFoundComponent},

 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
