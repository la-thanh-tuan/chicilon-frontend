import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
