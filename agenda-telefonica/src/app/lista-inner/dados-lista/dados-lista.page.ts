import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonesService } from 'src/app/telefones.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dados-lista',
  templateUrl: './dados-lista.page.html',
  styleUrls: ['./dados-lista.page.scss'],
})
export class DadosListaPage implements OnInit {

  public telSelecionado : any
  public valorPadrao = false


  userForm : FormGroup

  constructor(
    private router : Router,
    private dadoSelecionado : TelefonesService,
    private route : ActivatedRoute,
    private alertController: AlertController,
    private formBuilder : FormBuilder
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

    this.userForm = this.formBuilder.group({
      nome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      numero: ['', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
      sobrenome: [''],
      tipo: ['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.email,Validators.maxLength(50)])]
    })
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

  async alertinha() {
    const alert = await this.alertController.create({
      header: 'Dados Incorretos',
      buttons: [
        {
          text: 'Retornar',
          role: 'excluir',
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
    if (this.userForm.invalid || this.userForm.pending) {
      this.alertinha()
    }

    else {
      if (id > 0) {
        this.valorPadrao = false
      }
      else {
        this.dadoSelecionado.recebeDados(this.telSelecionado)
        this.valorPadrao = false
        this.router.navigate(['/listagem-telefones/'])
      }
    }
    

  }

  removerDado() {
    this.dadoSelecionado.removeDado(this.telSelecionado)
    this.router.navigate(['/listagem-telefones/'])
  }

}
