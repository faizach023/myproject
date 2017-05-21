import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Potato } from './potato';

@NgModule({
  declarations: [
    Potato,
  ],
  imports: [
    IonicModule.forRoot(Potato),
  ],
  exports: [
    Potato
  ]
})
export class PotatoModule {}
