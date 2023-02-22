import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPicturePageRoutingModule } from './main-picture-routing.module';

import { MainPicturePage } from './main-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPicturePageRoutingModule
  ],
  declarations: [MainPicturePage],
  exports: [MainPicturePage]
})
export class MainPicturePageModule {}
