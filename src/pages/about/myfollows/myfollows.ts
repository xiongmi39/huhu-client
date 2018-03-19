import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { NurseDetail } from '../../home/nurse/nurse-detail/nurse-detail';

/**
 * Generated class for the Myfollows page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-myfollows',
  templateUrl: 'myfollows.html',
})
export class Myfollows {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myfollows');
  }

  goNurseDetail(){
  	this.navCtrl.push(NurseDetail);
  }

}
