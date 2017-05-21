import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Crops } from './crops';

@NgModule({
  declarations: [
    Crops
  ],
  imports: [
    IonicModule.forRoot(Crops),
  ],
  exports: [
    Crops
  ]
})
export class CropsModule {}
