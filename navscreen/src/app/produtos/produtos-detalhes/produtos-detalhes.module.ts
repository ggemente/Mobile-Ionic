import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosDetalhesPageRoutingModule } from './produtos-detalhes-routing.module';

import { ProdutosDetalhesPage } from './produtos-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosDetalhesPageRoutingModule
  ],
  declarations: [ProdutosDetalhesPage]
})
export class ProdutosDetalhesPageModule {}
