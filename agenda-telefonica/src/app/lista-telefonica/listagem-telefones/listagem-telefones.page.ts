import { Component, OnInit, Renderer2 } from '@angular/core';
import { TelefonesService } from 'src/app/telefones.service';

@Component({
  selector: 'app-listagem-telefones',
  templateUrl: './listagem-telefones.page.html',
  styleUrls: ['./listagem-telefones.page.scss'],
})
export class ListagemTelefonesPage implements OnInit {

  public todosDados : any

  constructor(dadosTel : TelefonesService, private renderer : Renderer2) {
    this.todosDados = dadosTel.enviar_dados()
   }

  ngOnInit() {
  }

  mudarTema() {
    this.renderer.setAttribute(document.body, 'color-theme', 'dark')
  }

  trocaTema(event) {
    if(event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    }
    else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }
  }

}
