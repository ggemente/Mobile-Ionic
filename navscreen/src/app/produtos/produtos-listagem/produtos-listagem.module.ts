import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosListagemPageRoutingModule } from './produtos-listagem-routing.module';

import { ProdutosListagemPage } from './produtos-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosListagemPageRoutingModule
  ],
  declarations: [ProdutosListagemPage]
})
export class ProdutosListagemPageModule {}
