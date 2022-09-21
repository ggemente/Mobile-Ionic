import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServInternoPage } from './serv-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ServInternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServInternoPageRoutingModule {}
