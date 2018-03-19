import { Component , ViewChild} from '@angular/core';
import { NavController,App,ModalController } from 'ionic-angular';

import { Nurse } from '../../pages/home/nurse/nurse';
import { Company } from '../../pages/home/company/company';
import { CompanyDetail } from './company/company-detail/company-detail';
import { NurseserviceList } from './nurse/nurseservice-list/nurseservice-list';
import { NurseserviceDetail } from './nurse/nurseservice-detail/nurseservice-detail';
import { NurseDetail } from './nurse/nurse-detail/nurse-detail';

import { Locate } from '../../pages/common/locate/locate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location:string="西安市";
  isShowMap:boolean = false;
  @ViewChild('showMap') showMap; 
  constructor(public navCtrl: NavController,private app:App,public modalCtrl: ModalController) {

  }
  goNurse(){
  	this.app.getRootNav().push(Nurse);
  }
  goCompany(){
  	this.app.getRootNav().push(Company);
  }
  loadMap(){
    console.log(this.showMap);
    let map = this.showMap.baidumap.map;
    console.log(map);
    this.location = map.Zg;
  }
  showMapPanel(){
    this.isShowMap = true;
  }
  hideMapPanel(){
    this.isShowMap = false;
  }
  goCompanyDetail(){
    this.navCtrl.push(CompanyDetail);
  }
  goNurseServiceList(){
    this.app.getRootNav().push(NurseserviceList);
  }
  goNurseserviceDetail(){
    this.app.getRootNav().push(NurseserviceDetail);
  }
  goNurseDetail(){
    this.app.getRootNav().push(NurseDetail);
  }
  showLocate(){
    let modal = this.modalCtrl.create(Locate);
    modal.onDidDismiss(data =>{
      // if(data === 'note'){
      //   this.loadNotes();
      // }
      // if(data === 'discuss'){
      //   this.loadDiscuss(true);
      // }
      // this.isHideVideo = false;
    });
    modal.present();
  }

}
