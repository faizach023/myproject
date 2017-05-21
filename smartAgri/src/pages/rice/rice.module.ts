import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rice } from './rice';

@NgModule({
  declarations: [
    Rice,
  ],
  imports: [
    IonicModule.forRoot(Rice),
  ],
  exports: [
    Rice
  ]
})
export class RiceModule {}
