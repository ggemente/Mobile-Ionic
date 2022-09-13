import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosDetalhesPage } from './produtos-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosDetalhesPageRoutingModule {}
