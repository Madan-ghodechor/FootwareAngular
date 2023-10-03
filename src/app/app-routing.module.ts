import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { homepageGuard } from './auth/homepage.guard';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderDetComponent } from './order-det/order-det.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrderComponent } from './my-order/my-order.component';
 
const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'product_cat_details/:id/:name', component:CategoryProductsComponent},
  {
     path:'product_info/:product_id',
     component:ProductInfoComponent,
     canActivate:[homepageGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[homepageGuard]
 },
 {
  path:'place-order',
  component:PlaceOrderComponent,
  canActivate:[homepageGuard]
},
{
  path:'order_det/:order_id',
  component:OrderDetComponent,
  canActivate:[homepageGuard]
},
{
  path:'my-profile',
  component:MyProfileComponent,
  canActivate:[homepageGuard]
},
{
  path:'my-orders',
  component:MyOrderComponent,
  canActivate: [homepageGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
