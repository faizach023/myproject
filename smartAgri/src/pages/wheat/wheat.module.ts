import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Wheat } from './wheat';

@NgModule({
  declarations: [
    Wheat,
  ],
  imports: [
    IonicModule.forRoot(Wheat),
  ],
  exports: [
    Wheat
  ]
})
export class WheatModule {}
