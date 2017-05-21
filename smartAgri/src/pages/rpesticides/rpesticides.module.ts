import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rpesticides } from './rpesticides';

@NgModule({
  declarations: [
    Rpesticides,
  ],
  imports: [
    IonicModule.forRoot(Rpesticides),
  ],
  exports: [
    Rpesticides
  ]
})
export class RpesticidesModule {}
