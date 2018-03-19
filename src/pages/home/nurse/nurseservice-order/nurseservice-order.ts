import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TakeorderSuccess } from '../../../order/takeorder-success/takeorder-success';

/**
 * Generated class for the NurseserviceOrder page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurseservice-order',
  templateUrl: 'nurseservice-order.html',
})
export class NurseserviceOrder {
	nurseId:string = this.navParams.get('NurseId');
	isShowNurse:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if(this.nurseId !== undefined){
  		this.isShowNurse = true;
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseserviceOrder');
  }
  goTakeOrderSuccess(){
    this.navCtrl.push(TakeorderSuccess);
  }

}
