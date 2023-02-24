import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [SideBarComponent, NavBarComponent, MainAppComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainAppComponent]
})
export class SharedModule { }