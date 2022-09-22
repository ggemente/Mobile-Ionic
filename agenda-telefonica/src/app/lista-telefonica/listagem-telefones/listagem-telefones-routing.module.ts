import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemTelefonesPage } from './listagem-telefones.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemTelefonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemTelefonesPageRoutingModule {}
