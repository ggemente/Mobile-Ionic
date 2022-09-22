import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {

  private contatos = [
    {id: 1, nome:"Amor", numero: "9887-7936", tipo:"pessoal"},
    {id: 2, nome: "Alencar", numero: "9999-9999", tipo:"pessoal"},
    {id: 3, nome: "Toguro", numero: "4002-8922", tipo:"vendas"}
  ]

  constructor() { }
  
  enviar_dados() {
    return this.contatos
  }

  enviar_id(id: number) {
    const dados_selecionados = this.contatos.filter(contatos => contatos.id === id)
    return dados_selecionados[0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.contatos.length + 1
    this.contatos.push(dadosRecebidos)
  }

  removeDado(
    dadosRecebidos : any
    ) {
      this.contatos.splice(this.contatos.indexOf(dadosRecebidos), 1)
    }
}
