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
  resultado: string
  saida: string

  constructor(private alertController: AlertController) {}

  async presentAlert(var_op : string, op_nome:string) {
    const alert = await this.alertController.create({
      header: op_nome,
      subHeader: this.num1 + var_op  + this.num2,
      message: this.saida,
      buttons: ['Fechar'],
    });

    await alert.present();
  }


  somar () {
    var op_nome = ' Adição '
    var var_op = ' + '
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2) 

    var resultado = n1 + n2

    this.saida = resultado.toString()

    this.presentAlert(var_op, op_nome)
  }

  subtrair () {
    var op_nome = ' Subtração '
    var var_op = ' - '
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2) 

    var resultado = n1 - n2

    this.saida = resultado.toString()

    this.presentAlert(var_op, op_nome)
  }

  dividir() {
    var op_nome = ' Divisão '
    var var_op = ' / '
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2) 

    if(n2 !=0 ) {
      var resultado = n1 / n2
      this.saida = resultado.toString()
      this.presentAlert(var_op, op_nome)
    }

    else {
      this.saida = "Não existe divisão por zero"
      this.presentAlert(var_op, op_nome)
    }

  }

  multiplicar () {
    var op_nome = ' Multiplicação '
    var var_op = ' * '
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2) 

    var resultado = n1 * n2

    this.saida = resultado.toString()
    this.presentAlert(var_op, op_nome)
  }

}
  
