import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CompanyDetail } from './company-detail/company-detail';

/**
 * Generated class for the Company page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class Company {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Company');
  }
  goCompanyDetail(){
  	this.navCtrl.push(CompanyDetail);
  }

}
