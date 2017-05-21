import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cotton } from './cotton';

@NgModule({
  declarations: [
    Cotton,
  ],
  imports: [
    IonicModule.forRoot(Cotton),
  ],
  exports: [
    Cotton
  ]
})
export class CottonModule {}
