import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposProdutosService {

  private produtos = [

    {id: 1, nome:"amortecedor", valor:299.99, fabricante:"volwo", imagem:"assets/imagens/amortecedor.jpg"},
    {id: 2, nome:"motor", valor:2999.99, fabricante:"fiat", imagem:"assets/imagens/motor.jpg"},
    {id: 3, nome:"escapamento", valor:599.99, fabricante:"bosh", imagem:"assets/imagens/escapas.jpg"}

  ]

  constructor() { }

  enviar_dados() {
    return this.produtos
  }

  enviar_id(id: number){
    const dados_selecionados = this.produtos.filter(produto => produto.id === id)
    return dados_selecionados[0]
  }

}
