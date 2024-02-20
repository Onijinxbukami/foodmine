import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LoginComponent } from './app/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './app/services/login-signup/auth.service';
import { NgToastModule } from 'ng-angular-popup/lib/ng-toast.module';



const routes: Routes = [
    { path: '', component: HomeComponent },

];

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        HttpClientModule,
        NgToastModule,
        
    ],
    providers: [AuthService],

})
export class AppModule { }
