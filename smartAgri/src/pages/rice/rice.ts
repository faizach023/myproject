import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rseeds } from '../rseeds/rseeds';
import { Rpesticides } from '../rpesticides/rpesticides';
import { Rfertilizerz } from '../rfertilizerz/rfertilizerz';

/**
 * Generated class for the Rice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class Rice {
	rseeds = Rseeds;
	rpesticides = Rpesticides;
	rfertilizerz = Rfertilizerz;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rice');
  }

}
