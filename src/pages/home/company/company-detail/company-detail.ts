import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { CompanyOrder } from '../company-order/company-order';

/**
 * Generated class for the CompanyDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-company-detail',
  templateUrl: 'company-detail.html',
})
export class CompanyDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetail');
  }

  goCompanyOrder(){
  	this.navCtrl.push(CompanyOrder);
  }

}
