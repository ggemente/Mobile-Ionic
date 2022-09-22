import { Component, OnInit } from '@angular/core';
import { TelefonesService } from 'src/app/telefones.service';

@Component({
  selector: 'app-listagem-telefones',
  templateUrl: './listagem-telefones.page.html',
  styleUrls: ['./listagem-telefones.page.scss'],
})
export class ListagemTelefonesPage implements OnInit {

  public todosDados : any

  constructor(dadosTel : TelefonesService) {
    this.todosDados = dadosTel.enviar_dados()
   }

  ngOnInit() {
  }

}
