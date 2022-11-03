import { Component, OnInit, Renderer2 } from '@angular/core';
import { TelefonesService } from 'src/app/telefones.service';
import { Storage } from '@ionic/storage-angular';
import { Guid } from 'guid-typescript';
import { Contato } from 'src/app/models/contato.model';

@Component({
  selector: 'app-listagem-telefones',
  templateUrl: './listagem-telefones.page.html',
  styleUrls: ['./listagem-telefones.page.scss'],
})
export class ListagemTelefonesPage implements OnInit {

  public todosDados : any

  constructor(public dadosTel : TelefonesService, private renderer : Renderer2) {
    this.todosDados = dadosTel.enviar_dados()
   }

  ngOnInit() {
    this.dadosTel.listarTodos().then(todosDados => {this.todosDados = todosDados})
    console.log(this.todosDados)
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
