import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Wseeds } from './wseeds';

@NgModule({
  declarations: [
    Wseeds,
  ],
  imports: [
    IonicModule.forRoot(Wseeds),
  ],
  exports: [
    Wseeds
  ]
})
export class WseedsModule {}
