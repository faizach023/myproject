import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Maize } from '../maize/maize';
import { Wheat } from '../wheat/wheat';
import { Cotton } from '../cotton/cotton';
import { Rice} from '../rice/rice';
import { Potato} from '../potato/potato';
/**
 * Generated class for the Crops page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crops',
  templateUrl: 'crops.html',
})
export class Crops {
       maize = Maize;
	   wheat = Wheat;
	   cotton = Cotton;
	   rice = Rice;
	   potato = Potato;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Crops');
  }
  

}
