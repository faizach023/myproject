import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Contact } from './contact';

@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
    IonicModule.forRoot(Contact),
  ],
  exports: [
    Contact
  ]
})
export class ContactModule {}
