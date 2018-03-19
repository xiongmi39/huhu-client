import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NurseDetail } from './nurse-detail/nurse-detail';

/**
 * Generated class for the Nurse page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurse',
  templateUrl: 'nurse.html',
})
export class Nurse {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nurse');
  }
  goNurseDetail(){
  	this.navCtrl.push(NurseDetail);
  }

}
