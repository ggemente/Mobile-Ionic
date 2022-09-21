import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoServService {

  private servicos = [ 
    {id: 1, nome:"Alinhamento", valor: 49.9,},
    {id: 2, nome:"Balanceamento", valor: 39.9},
    {id: 3, nome:"Revisão de Freios", valor: 129.9},
    {id: 4, nome:"Revisão de Suspensão", valor: 199.9}
  ]

  constructor() { }

  enviar_dados() {
    return this.servicos
  }

  enviar_id(id: number){
    const dados_selecionados = this.servicos.filter(servicos => servicos.id === id)
    return dados_selecionados[0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.servicos.length + 1
    this.servicos.push(dadosRecebidos)
  }

  removeDado(
    dadosRecebidos : any
    ) {
      this.servicos.splice(this.servicos.indexOf(dadosRecebidos), 1)
    }

}
