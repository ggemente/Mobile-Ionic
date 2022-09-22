import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listagem-telefones',
    pathMatch: 'full'
  },
  {
    path: 'listagem-telefones',
    loadChildren: () => import('./lista-telefonica/listagem-telefones/listagem-telefones.module').then( m => m.ListagemTelefonesPageModule)
  },
  {
    path: 'dados-lista/:id',
    loadChildren: () => import('./lista-inner/dados-lista/dados-lista.module').then( m => m.DadosListaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
