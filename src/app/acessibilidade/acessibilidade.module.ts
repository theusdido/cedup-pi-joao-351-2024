import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessibilidadePageRoutingModule } from './acessibilidade-routing.module';

import { AcessibilidadePage } from './acessibilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessibilidadePageRoutingModule
  ],
  declarations: [AcessibilidadePage],
  exports:[AcessibilidadePage]
})
export class AcessibilidadePageModule {}
