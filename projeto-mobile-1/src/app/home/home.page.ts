import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private pessoa : Pessoa

  num1 : string
  num2: string
  sexo: string
  saida: string
  saida2: string
  imagem : any = "assets/imc.png"

  constructor(
    private pessoaService : PessoasService
  ) {}
  

  calcular() {
    var peso = parseFloat(this.num1)
    var altura = parseFloat(this.num2)
    var genero = this.sexo
    var resultado = peso / (altura**2)
    
    if (genero == null) {
      this.saida2 ='Escolha o Sexo'
    }

    if ( genero == 'm' ) {
      if (resultado <= 20.07) {
      this.saida2 = 'Abaixo do Peso'
      this.saida = resultado.toString()
      this.imagem = 'assets/warning.png'
      }

      if (resultado > 20.07 && resultado <= 27.8) {
      this.saida2 = 'Peso Normal'
      this.saida = resultado.toString()
      this.imagem = 'assets/check-mark.png'
      }

      if (resultado > 27.8) {
      this.saida2 = 'Acima do Peso'
      this.saida = resultado.toString()
      this.imagem = 'assets/warning.png'
      }

    }


    if (genero == 'f'){
      if (resultado <= 19) {
      this.saida2 = 'Abaixo do Peso'
      this.saida = resultado.toString()
      this.imagem = 'assets/warning.png'
      }

      if (resultado > 19 && resultado <=27.3) {
      this.saida2 = 'Peso Normal'
      this.saida = resultado.toString()
      this.imagem = 'assets/check-mark.png'
      }

      if (resultado > 27.3) {
      this.saida2 = 'Acima do Peso'
      this.saida = resultado.toString()
      this.imagem = 'assets/warning.png'
      }

    }

    this.pessoa = {
      id: Guid.createEmpty(),
      peso : this.num1,
      altura : this.num2,
      sexo : this.sexo,
      saida : this.saida,
      saida2 : this.saida2
    }

    this.pessoaService.inserir(this.pessoa)

  }
}
