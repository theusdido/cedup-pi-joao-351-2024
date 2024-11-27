import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorPageRoutingModule } from './vendedor-routing.module';

import { VendedorPage } from './vendedor.page';
import { AcessibilidadePageModule } from "../acessibilidade/acessibilidade.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorPageRoutingModule,
    AcessibilidadePageModule
],
  declarations: [VendedorPage]
})
export class VendedorPageModule {}
