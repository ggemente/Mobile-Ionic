import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosListaPage } from './dados-lista.page';

const routes: Routes = [
  {
    path: '',
    component: DadosListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosListaPageRoutingModule {}
