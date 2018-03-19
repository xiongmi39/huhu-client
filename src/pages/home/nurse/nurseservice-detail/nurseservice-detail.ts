import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { NurseserviceOrder } from '../nurseservice-order/nurseservice-order';

/**
 * Generated class for the NurseserviceDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurseservice-detail',
  templateUrl: 'nurseservice-detail.html',
})
export class NurseserviceDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseserviceDetail');
  }
  goNurseServiceOrder(){
  	this.navCtrl.push(NurseserviceOrder);
  }

}
