import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { GreetingComponent } from '../shared/greeting/greeting.component';
import { CategoriesComponent } from '../shared/categories/categories.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    GreetingComponent, 
    CategoriesComponent]
})
export class HomePageModule {}
