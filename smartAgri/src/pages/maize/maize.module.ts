import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Maize } from './maize';

@NgModule({
  declarations: [
    Maize,
  ],
  imports: [
    IonicModule.forRoot(Maize),
	
  ],
  exports: [
    Maize
  ]
})
export class MaizeModule {}
