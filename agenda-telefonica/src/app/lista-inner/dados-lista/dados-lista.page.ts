import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonesService } from 'src/app/telefones.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contato } from 'src/app/models/contato.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-dados-lista',
  templateUrl: './dados-lista.page.html',
  styleUrls: ['./dados-lista.page.scss'],
})
export class DadosListaPage implements OnInit {

  private contato : Contato
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
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    if (id != 'edit') {
     // this.telSelecionado = this.dadoSelecionado.enviar_id(id)
    }
    else {
     // this.telSelecionado = {id, nome: "", numero: "", tipo: ""}
      this.contato = {id: Guid.createEmpty(), nome: '', sobrenome: '', tipo: '', numero: '', email:'' }
      this.valorPadrao = true
    }

    this.userForm = this.formBuilder.group({
      nome : [this.contato.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      numero: [this.contato.numero, Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
      sobrenome: [this.contato.sobrenome],
      tipo: [this.contato.tipo,Validators.required],
      email: [this.contato.email, Validators.compose([Validators.required, Validators.minLength(8), Validators.email,Validators.maxLength(50)])]
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
    console.log(this.userForm.value)
    if (this.userForm.invalid || this.userForm.pending) {
      this.alertinha()
    }

    else {
      if (id > 0) {
        this.valorPadrao = false
      }
      else {
        this.dadoSelecionado.inserir(this.userForm.value)
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
