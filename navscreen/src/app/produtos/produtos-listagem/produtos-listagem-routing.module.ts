import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosListagemPage } from './produtos-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosListagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosListagemPageRoutingModule {}
