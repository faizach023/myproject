import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Fertilizerz } from './fertilizerz';

@NgModule({
  declarations: [
    Fertilizerz,
  ],
  imports: [
    IonicModule.forRoot(Fertilizerz),
  ],
  exports: [
    Fertilizerz
  ]
})
export class FertilizerzModule {}
