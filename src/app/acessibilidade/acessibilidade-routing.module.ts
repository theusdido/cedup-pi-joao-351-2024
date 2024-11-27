import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessibilidadePage } from './acessibilidade.page';

const routes: Routes = [
  {
    path: '',
    component: AcessibilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessibilidadePageRoutingModule {}
