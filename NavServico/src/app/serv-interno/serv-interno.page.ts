import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoServService } from '../tipo-serv.service';

@Component({
  selector: 'app-serv-interno',
  templateUrl: './serv-interno.page.html',
  styleUrls: ['./serv-interno.page.scss'],
})
export class ServInternoPage implements OnInit {

  public produtoSelecionado : any
  public valorPadrao = false

  constructor(
    private dadoSelecionado :TipoServService ,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id> 0) {
    this.produtoSelecionado = this.dadoSelecionado.enviar_id(id)
  }
    else {
      this.produtoSelecionado = {id, nome: "", valor: 0.0}
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
      this.dadoSelecionado.recebeDados(this.produtoSelecionado)
      this.valorPadrao = false
    }
  }

  removerDado() {
    this.dadoSelecionado.removeDado(this.produtoSelecionado)
  }


}
