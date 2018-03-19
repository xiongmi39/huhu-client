import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Evaluate } from '../evaluate/evaluate';


/**
 * Generated class for the TakeorderSuccess page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-takeorder-success',
  templateUrl: 'takeorder-success.html',
})
export class TakeorderSuccess {
	dws: string = "orderStatus";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeorderSuccess');
  }
  goEvaluate(){
  	this.navCtrl.push(Evaluate);
  }

}
