import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { NurseserviceOrder } from '../nurseservice-order/nurseservice-order';

/**
 * Generated class for the NurseDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurse-detail',
  templateUrl: 'nurse-detail.html',
})
export class NurseDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseDetail');
  }
  goNurseServiceOrder(){
  	this.navCtrl.push(NurseserviceOrder,{
      NurseId: 'N001'
    });
  }

}
