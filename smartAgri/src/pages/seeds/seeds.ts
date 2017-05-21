import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {P1543} from '../p1543/p1543';
import {Y3087} from '../y3087/y3087';

/**
 * Generated class for the Seeds page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seeds',
  templateUrl: 'seeds.html',
})
export class Seeds{
   
	 itemSelectedP1543(){
	  	
	  this.navCtrl.push(P1543);
	    
	  }
	  itemSelectedY3087(){
	 	
	  this.navCtrl.push(Y3087);
	    
	  }

		  
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seeds');
  }

}
