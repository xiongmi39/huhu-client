import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Evaluate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-evaluate',
  templateUrl: 'evaluate.html',
})
export class Evaluate {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public rate:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Evaluate');
  }
  onModelChange(e){
  	console.log(e);
  }

}
