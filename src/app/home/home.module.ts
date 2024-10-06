import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CategorySectionComponent } from '../category-section/category-section.component'; // Importa el componente
import { FeaturedProductsComponent} from '../featured-products/featured-products.component'; // Importa el componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CategorySectionComponent,FeaturedProductsComponent]
})
export class HomePageModule {}
