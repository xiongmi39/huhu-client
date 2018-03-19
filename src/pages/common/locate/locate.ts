import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {CityPickerService} from "../../../providers/common/city-picker";

/**
 * Generated class for the Locate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-locate',
  templateUrl: 'locate.html',
})
export class Locate {
  cityData: any[]; //城市数据
  cityName:string = '陕西省 西安市 雁塔区'; //初始化城市名
  code:string; //城市编码
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public cityPickerSev: CityPickerService) {
    this.setCityPickerData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Locate');
  }
  dismiss() {
  	this.viewCtrl.dismiss();
  }
  confirm(){
  	this.viewCtrl.dismiss();
  }
    /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.cityPickerSev.getCitiesData()
      .then( data => {
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    console.log(event);
    this.code = event['region'].value
  }

}
