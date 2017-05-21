import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Wfertilizerz } from './wfertilizerz';

@NgModule({
  declarations: [
    Wfertilizerz,
  ],
  imports: [
    IonicModule.forRoot(Wfertilizerz),
  ],
  exports: [
    Wfertilizerz
  ]
})
export class WfertilizerzModule {}
