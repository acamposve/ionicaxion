import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';



@NgModule({
    declarations: [CategoryCarouselComponent],
  imports: [
    CommonModule,
    IonicModule,
     // Asegúrate de que IonicModule está aquí
  ],
  exports: [CategoryCarouselComponent] // Exporta el componente para usarlo en otros módulos
})
export class SharedModule {}