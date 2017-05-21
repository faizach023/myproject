import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Pfertilizerz } from './pfertilizerz';

@NgModule({
  declarations: [
    Pfertilizerz,
  ],
  imports: [
    IonicModule.forRoot(Pfertilizerz),
  ],
  exports: [
    Pfertilizerz
  ]
})
export class PfertilizerzModule {}
