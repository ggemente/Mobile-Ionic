import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosListaPageRoutingModule } from './dados-lista-routing.module';

import { DadosListaPage } from './dados-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosListaPageRoutingModule
  ],
  declarations: [DadosListaPage]
})
export class DadosListaPageModule {}
