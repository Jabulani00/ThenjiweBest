import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStoreroomPageRoutingModule } from './add-storeroom-routing.module';

import { AddStoreroomPage } from './add-storeroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStoreroomPageRoutingModule
  ],
  declarations: [AddStoreroomPage]
})
export class AddStoreroomPageModule {}
