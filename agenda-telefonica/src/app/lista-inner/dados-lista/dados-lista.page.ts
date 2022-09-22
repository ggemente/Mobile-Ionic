import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelefonesService } from 'src/app/telefones.service';

@Component({
  selector: 'app-dados-lista',
  templateUrl: './dados-lista.page.html',
  styleUrls: ['./dados-lista.page.scss'],
})
export class DadosListaPage implements OnInit {

  public telSelecionado : any
  public valorPadrao = false

  constructor(
    private dadoSelecionado : TelefonesService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0) {
      this.telSelecionado = this.dadoSelecionado.enviar_id(id)
    }
    else {
      this.telSelecionado = {id, nome: "", numero: "", tipo: ""}
      this.valorPadrao = true
    }
  }

  alterarDado() {
    this.valorPadrao = true
  }

  salvarDado() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0) {
      this.valorPadrao = false
    }
    else {
      this.dadoSelecionado.recebeDados(this.telSelecionado)
      this.valorPadrao = false
    }
  }

  removerDado() {
    this.dadoSelecionado.removeDado(this.telSelecionado)
  }

}
