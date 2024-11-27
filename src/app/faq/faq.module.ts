import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';

import { FaqPage } from './faq.page';
import { AcessibilidadePageModule } from '../acessibilidade/acessibilidade.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule,
    AcessibilidadePageModule
  ],
  declarations: [FaqPage]
})
export class FaqPageModule {}
