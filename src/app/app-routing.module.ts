import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingAuthComponent } from './selling-auth/selling-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';

const routes:Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'seller-auth',
    component: SellingAuthComponent
  },
  {
    path:'seller-home',
    component: SellerHomeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
