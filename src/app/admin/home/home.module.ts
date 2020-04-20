import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent }
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
