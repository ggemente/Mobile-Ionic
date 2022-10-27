import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { Pessoa } from './models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaServService {

  constructor(
    private storage : Storage
  ) { }

  inserir(argumento : Pessoa) {
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos() {
    let arrayPessoa : Pessoa [] = [];

    await this.storage.forEach((value: string) =>
      {const pessoa: Pessoa = JSON.parse(value); arrayPessoa.push(pessoa)})

    return arrayPessoa;
  }
}
