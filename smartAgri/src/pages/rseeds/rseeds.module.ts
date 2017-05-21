import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rseeds } from './rseeds';

@NgModule({
  declarations: [
    Rseeds,
  ],
  imports: [
    IonicModule.forRoot(Rseeds),
  ],
  exports: [
    Rseeds
  ]
})
export class RseedsModule {}
