import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cpesticides } from './cpesticides';

@NgModule({
  declarations: [
    Cpesticides,
  ],
  imports: [
    IonicModule.forRoot(Cpesticides),
  ],
  exports: [
    Cpesticides
  ]
})
export class CpesticidesModule {}
