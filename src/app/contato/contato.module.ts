import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoPageRoutingModule } from './contato-routing.module';

import { ContatoPage } from './contato.page';
import { AcessibilidadePageModule } from '../acessibilidade/acessibilidade.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoPageRoutingModule,
    AcessibilidadePageModule
  ],
  declarations: [ContatoPage]
})
export class ContatoPageModule {}
