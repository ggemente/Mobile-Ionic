import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab1Page {

  A: string
  B: string
  C: string
  saida: string
  imagem : any = 'assets/satan.jpg'

  constructor() {}

  calcular() {
    var A1 = parseFloat(this.A)
    var B2 = parseFloat(this.B)
    var C3 = parseFloat(this.C)

    if (A1 + B2 > C3 && A1 + C3 > B2 && C3 + B2 > A1) {
      if ( A1 == B2 && A1 == C3) {
        this.saida = 'Equilatero'
        this.imagem = 'assets/equilatero.png'
      }
      else if (A1 != B2 && A1 != C3) {
        this.saida = 'Escaleno'
        this.imagem = 'assets/scano.jpg'
      }
      else  {
        this.saida ='Isóceles'
        this.imagem = 'assets/isoceles.png'
      }
    }

    else {
      this.saida = 'Triângulo inexistente'
    }
  }

}
