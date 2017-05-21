import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Crops} from '../crops/crops';
import {Contact} from '../contact/contact';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
    
	 
  constructor(public navCtrl: NavController) {

  }
  pushPage(){
	  
  this.navCtrl.push(Crops);
// this.navCtrl.push(Contact);
  
  

}
pushcPage(){
	  
 // this.navCtrl.push(Crops);
this.navCtrl.push(Contact);
  
  

}
}
