import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiposProdutosService } from '../tipos-produtos.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.page.html',
  styleUrls: ['./produtos-listagem.page.scss'],
})
export class ProdutosListagemPage implements OnInit {

  public todosDados : any

  constructor(dadosProduto : TiposProdutosService) {
   this.todosDados = dadosProduto.enviar_dados() 
   }

  ngOnInit() {}

}
