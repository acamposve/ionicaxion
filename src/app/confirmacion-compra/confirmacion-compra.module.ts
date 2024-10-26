import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionCompraPageRoutingModule } from './confirmacion-compra-routing.module';

import { ConfirmacionCompraPage } from './confirmacion-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionCompraPageRoutingModule
  ],
  declarations: [ConfirmacionCompraPage]
})
export class ConfirmacionCompraPageModule {}
