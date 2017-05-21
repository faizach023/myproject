import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Wpesticides } from './wpesticides';

@NgModule({
  declarations: [
    Wpesticides,
  ],
  imports: [
    IonicModule.forRoot(Wpesticides),
  ],
  exports: [
    Wpesticides
  ]
})
export class WpesticidesModule {}
