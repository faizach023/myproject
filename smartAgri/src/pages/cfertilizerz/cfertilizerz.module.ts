import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cfertilizerz } from './cfertilizerz';

@NgModule({
  declarations: [
    Cfertilizerz,
  ],
  imports: [
    IonicModule.forRoot(Cfertilizerz),
  ],
  exports: [
    Cfertilizerz
  ]
})
export class CfertilizerzModule {}
