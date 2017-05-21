import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Pesticides } from './pesticides';

@NgModule({
  declarations: [
    Pesticides,
  ],
  imports: [
    IonicModule.forRoot(Pesticides),
  ],
  exports: [
    Pesticides
  ]
})
export class PesticidesModule {}
