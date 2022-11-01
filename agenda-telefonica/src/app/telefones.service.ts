import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Guid } from 'guid-typescript';
import { Contato } from './models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {

  private contatos = [
    {id: 1, nome:"Thaís", sobrenome: "Amor", numero: "9887-7936", tipo:"pessoal", email:"thaislrd@gmail.com"},
    {id: 2, nome: "Alencar", sobrenome: "Antônio", numero: "9999-9999", tipo:"pessoal", email:"alencarantonio@gmail.com"},
    {id: 3, nome: "Toguro", sobrenome: "Vendas", numero: "4002-8922", tipo:"vendas", email:"togurovendas@outlook.com"}
  ]

  constructor(
    private storage: Storage
  ) { }
  
  enviar_dados() {
    return this.contatos
  }

  // enviar_id(id: number) {
  //   const dados_selecionados = this.contatos.filter(contatos => contatos.id === id)
  //   return dados_selecionados[0]
  // }

  // recebeDados(dadosRecebidos : any){
  //   dadosRecebidos.id = Math.max(this.contatos.length)
  //   this.contatos.push(dadosRecebidos)
  // }

  removeDado(
    dadosRecebidos : any
    ) {
      this.contatos.splice(this.contatos.indexOf(dadosRecebidos), 1)
    }

  inserir(argumento : Contato) {
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos() {
    let arrayContato: Contato [] = [];

    await this.storage.forEach((value: string) => 
      {const contato : Contato = JSON.parse(value); arrayContato.push(contato)})

    return arrayContato
  }
}
