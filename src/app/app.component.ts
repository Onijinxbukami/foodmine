import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FoodPageComponent } from './food-page/food-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FormsModule, FoodPageComponent, ReactiveFormsModule, NgToastModule  ]
})


export class AppComponent {
  title = 'front-end';
}
