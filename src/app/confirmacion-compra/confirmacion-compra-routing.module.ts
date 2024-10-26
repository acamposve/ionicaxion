import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionCompraPage } from './confirmacion-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionCompraPageRoutingModule {}
