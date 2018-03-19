import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { NurseDetail } from '../../pages/home/nurse/nurse-detail/nurse-detail';

/**
 * Generated class for the NurseListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nurse-list-component',
  templateUrl: 'nurse-list-component.html'
})
export class NurseListComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NurseListComponent Component');
    this.text = 'Hello World';
  }

  goNurseDetail(){
  	this.navCtrl.push(NurseDetail);
  }

}
