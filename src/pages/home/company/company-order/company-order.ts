import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TakeorderSuccess } from '../../../order/takeorder-success/takeorder-success';

/**
 * Generated class for the CompanyOrder page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-company-order',
  templateUrl: 'company-order.html',
})
export class CompanyOrder {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyOrder');
  }
  goTakeOrderSuccess(){
  	this.navCtrl.push(TakeorderSuccess);
  }

}
