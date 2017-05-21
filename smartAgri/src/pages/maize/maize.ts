import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seeds } from '../seeds/seeds';
import { Pesticides } from '../pesticides/pesticides';
import { Fertilizerz } from '../fertilizerz/fertilizerz';
/**
 * Generated class for the Maize page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maize',
  templateUrl: 'maize.html',
})
export class Maize {
    seeds = Seeds;
	pesticides = Pesticides;
	fertilizerz = Fertilizerz;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Maize');
  }

}
