import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Pseeds } from './pseeds';

@NgModule({
  declarations: [
    Pseeds,
  ],
  imports: [
    IonicModule.forRoot(Pseeds),
  ],
  exports: [
    Pseeds
  ]
})
export class PseedsModule {}
