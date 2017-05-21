import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cseeds } from './cseeds';

@NgModule({
  declarations: [
    Cseeds,
  ],
  imports: [
    IonicModule.forRoot(Cseeds),
  ],
  exports: [
    Cseeds
  ]
})
export class CseedsModule {}
