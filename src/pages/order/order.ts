import { Component } from '@angular/core';
import {  NavController, NavParams,App } from 'ionic-angular';

import { TakeorderSuccess } from './takeorder-success/takeorder-success';

/**
 * Generated class for the Hospital page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class Order {
	dws: string = "unfinish";
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hospital');
  }
  goTakeOrderSuccess(){
  	this.app.getRootNav().push(TakeorderSuccess);
  }

}
