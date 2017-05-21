import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pseeds } from '../pseeds/pseeds';
import { Ppesticides } from '../ppesticides/ppesticides';
import { Pfertilizerz } from '../pfertilizerz/pfertilizerz';
/**
 * Generated class for the Potato page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-potato',
  templateUrl: 'potato.html',
})
export class Potato {
      pseeds = Pseeds;
	ppesticides = Ppesticides;
	pfertilizerz = Pfertilizerz;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Potato');
  }

}
