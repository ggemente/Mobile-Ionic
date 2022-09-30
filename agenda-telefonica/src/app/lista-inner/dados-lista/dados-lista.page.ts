import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonesService } from 'src/app/telefones.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dados-lista',
  templateUrl: './dados-lista.page.html',
  styleUrls: ['./dados-lista.page.scss'],
})
export class DadosListaPage implements OnInit {

  public telSelecionado : any
  public valorPadrao = false

  constructor(
    private router : Router,
    private dadoSelecionado : TelefonesService,
    private route : ActivatedRoute,
    private alertController: AlertController
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deseja excluir este contato?',
      buttons: [
        {
          text: 'Sim',
          role: 'excluir',
          handler: () => {
            this.removerDado()
          }
          
        },

        {
          text: 'Não',
          role: 'cancelar'
        }
      ],
    });

    await alert.present();
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
    this.router.navigate(['/listagem-telefones/'])
  }

}
