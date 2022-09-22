import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemTelefonesPageRoutingModule } from './listagem-telefones-routing.module';

import { ListagemTelefonesPage } from './listagem-telefones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemTelefonesPageRoutingModule
  ],
  declarations: [ListagemTelefonesPage]
})
export class ListagemTelefonesPageModule {}
