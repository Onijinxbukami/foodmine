import { FoodPageComponent } from './food-page/food-page.component';
import { Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodPageComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'getPass', component: ForgetPasswordComponent},
    { path: 'dashBoard', component: DashboardComponent}

];
