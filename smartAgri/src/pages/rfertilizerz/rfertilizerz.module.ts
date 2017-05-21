import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rfertilizerz } from './rfertilizerz';

@NgModule({
  declarations: [
    Rfertilizerz,
  ],
  imports: [
    IonicModule.forRoot(Rfertilizerz),
  ],
  exports: [
    Rfertilizerz
  ]
})
export class RfertilizerzModule {}
