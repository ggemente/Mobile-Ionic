import { Component, OnInit } from '@angular/core';
import { TipoServService } from '../tipo-serv.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

 public todosDados : any

 constructor(dadosServ : TipoServService) {
  this.todosDados = dadosServ.enviar_dados() 
  }


  ngOnInit() {
  }
  
}
