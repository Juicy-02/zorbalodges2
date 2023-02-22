import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPicturePage } from './main-picture.page';

const routes: Routes = [
  {
    path: '',
    component: MainPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPicturePageRoutingModule {}
