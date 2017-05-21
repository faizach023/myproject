import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cseeds } from '../cseeds/cseeds';
import { Cpesticides } from '../cpesticides/cpesticides';
import { Cfertilizerz } from '../cfertilizerz/cfertilizerz';
/**
 * Generated class for the Cotton page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cotton',
  templateUrl: 'cotton.html',
})
export class Cotton {
	 cseeds = Cseeds;
	cpesticides = Cpesticides;
	cfertilizerz = Cfertilizerz;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cotton');
  }

}
