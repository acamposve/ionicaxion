import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaDePagoPageRoutingModule } from './forma-de-pago-routing.module';

import { FormaDePagoPage } from './forma-de-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormaDePagoPageRoutingModule
  ],
  declarations: [FormaDePagoPage]
})
export class FormaDePagoPageModule {}
