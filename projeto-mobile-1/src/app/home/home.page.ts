import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1 : string
  num2: string
  sexo: string
  saida: string
  saida2: string
  imagem : any = "assets/imc.png"

  constructor() {}
  

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
  
    

  }




}
