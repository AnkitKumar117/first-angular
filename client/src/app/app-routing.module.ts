import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes : Routes = [
  { path: "", component: HomeComponent},
  { path: "register", component: RegisterComponent},
  { path: "showDetails", component: ShowDetailsComponent},
  { path: "login", component: LoginComponent},
  //{ path: "**", redirectTo: "register"},
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
