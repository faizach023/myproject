import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ppesticides } from './ppesticides';

@NgModule({
  declarations: [
    Ppesticides,
  ],
  imports: [
    IonicModule.forRoot(Ppesticides),
  ],
  exports: [
    Ppesticides
  ]
})
export class PpesticidesModule {}
