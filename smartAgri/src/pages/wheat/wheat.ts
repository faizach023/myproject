import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Wseeds } from '../wseeds/wseeds';
import { Wpesticides } from '../wpesticides/wpesticides';
import { Wfertilizerz } from '../wfertilizerz/wfertilizerz';
/**
 * Generated class for the Wheat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-wheat',
  templateUrl: 'wheat.html',
})
export class Wheat {
   wseeds = Wseeds;
   wpesticides = Wpesticides;
   wfertilizerz = Wfertilizerz;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wheat');
  }

}
