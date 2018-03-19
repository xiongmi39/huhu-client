import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';

import { Setup } from '../../pages/common/setup/setup';
import { UserFile } from '../../pages/about/user-file/user-file';
import { Purse } from '../../pages/about/purse/purse';
import { Coupon } from '../../pages/about/coupon/coupon';
import { Myfollows } from '../../pages/about/myfollows/myfollows';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private app:App) {

  }

  goSetup(){
  	this.navCtrl.push(Setup);
  }
  goUserFile(){
  	this.navCtrl.push(UserFile);
  }

  goPurse(){
  	this.navCtrl.push(Purse);
  }

  goCoupon(){
  	this.navCtrl.push(Coupon);
  }
  goMyFollows(){
    this.app.getRootNav().push(Myfollows);
  }

}
