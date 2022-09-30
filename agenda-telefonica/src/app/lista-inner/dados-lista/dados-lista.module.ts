import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicInputMaskModule} from "@thiagoprz/ionic-input-mask";
import { IonicModule } from '@ionic/angular';

import { DadosListaPageRoutingModule } from './dados-lista-routing.module';

import { DadosListaPage } from './dados-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosListaPageRoutingModule,
    IonicInputMaskModule
  ],
  declarations: [DadosListaPage]
})
export class DadosListaPageModule {}
