import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaPageRoutingModule } from './pesquisa-routing.module';

import { PesquisaPage } from './pesquisa.page';
import { AcessibilidadePageModule } from '../acessibilidade/acessibilidade.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaPageRoutingModule,
    AcessibilidadePageModule
  ],
  declarations: [PesquisaPage]
})
export class PesquisaPageModule {}
