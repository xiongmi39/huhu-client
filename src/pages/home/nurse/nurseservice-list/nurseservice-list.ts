import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NurseserviceDetail } from '../nurseservice-detail/nurseservice-detail';

/**
 * Generated class for the NurseserviceList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurseservice-list',
  templateUrl: 'nurseservice-list.html',
})
export class NurseserviceList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseserviceList');
  }
  goNurseserviceDetail(){
  	this.navCtrl.push(NurseserviceDetail);
  }
}
