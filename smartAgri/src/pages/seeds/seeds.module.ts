import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Seeds } from './seeds';

@NgModule({
  declarations: [
    Seeds,
  ],
  imports: [
    IonicModule.forRoot(Seeds),
  ],
  exports: [
    Seeds
  ]
})
export class SeedsModule {}
