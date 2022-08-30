import { Component } from '@angular/core';
import { AlertController, IonicSafeString } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab2Page {

  A: string
  B: string
  C: string
  saida: string
  erro: string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: this.saida,
      message: this.erro,
      buttons: ['OK'],
    });

    await alert.present();
  }


  calcular2() {
    var A1 = parseFloat(this.A)
    var B2 = parseFloat(this.B)
    var C3 = parseFloat(this.C)
    var SP = A1 + B2 + C3 / 2
    var resultado : any

    if (A1 + B2 > C3 && A1 + C3 > B2 && C3 + B2 > A1) {
      resultado = Math.sqrt(SP * (SP-A1) * (SP - B2) * (SP-C3))
      this.saida = resultado.toString()
      this.erro = ''
      this.presentAlert()
    }
    else {
      this.erro = 'Triângulo inexistente'
    }
    
  }
  

}
