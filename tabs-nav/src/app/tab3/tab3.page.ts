import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss' , '../explore-container/explore-container.component.scss']
})
export class Tab3Page {

  A: string
  B: string
  saida: string
  erro: string
  
  constructor() {}


  calcular3() {
    var Altura = parseFloat(this.A)
    var Base = parseFloat(this.B)
    var Area = (Base * Altura) / 2
    this.saida = Area.toString()
  }

}
