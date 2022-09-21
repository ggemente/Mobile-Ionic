import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServInternoPageRoutingModule } from './serv-interno-routing.module';

import { ServInternoPage } from './serv-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServInternoPageRoutingModule
  ],
  declarations: [ServInternoPage]
})
export class ServInternoPageModule {}
