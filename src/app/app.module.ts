import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BaiduMapModule } from 'angular2-baidu-map';//import BaiduMapModule
import { Ionic2RatingModule } from 'ionic2-rating';
import { CityPickerModule } from  "ionic2-city-picker"

import { Login } from '../pages/common/login/login';
import { Setup } from '../pages/common/setup/setup';
import { Locate } from '../pages/common/locate/locate';
import { AboutPage } from '../pages/about/about';
import { KnowledgePage } from '../pages/knowledge/knowledge';
import { ArticleDetail } from '../pages/knowledge/article-detail/article-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Order } from '../pages/order/order';
import { Evaluate } from '../pages/order/evaluate/evaluate';
import { TakeorderSuccess } from '../pages/order/takeorder-success/takeorder-success';
import { Nurse } from '../pages/home/nurse/nurse';
import { NurseDetail } from '../pages/home/nurse/nurse-detail/nurse-detail';
import { NurseserviceList } from '../pages/home/nurse/nurseservice-list/nurseservice-list';
import { NurseserviceDetail } from '../pages/home/nurse/nurseservice-detail/nurseservice-detail';
import { NurseserviceOrder } from '../pages/home/nurse/nurseservice-order/nurseservice-order';
import { Company } from '../pages/home/company/company';
import { CompanyDetail } from '../pages/home/company/company-detail/company-detail';
import { CompanyOrder } from '../pages/home/company/company-order/company-order';
import { UserFile } from '../pages/about/user-file/user-file';
import { Myfollows } from '../pages/about/myfollows/myfollows';
import { Purse } from '../pages/about/purse/purse';
import { Coupon } from '../pages/about/coupon/coupon';

import { NurseListComponent } from '../components/nurse-list-component/nurse-list-component';
import { ShowMap } from '../components/show-map/show-map';

import {CityPickerService} from "../providers/common/city-picker";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    KnowledgePage,
    ArticleDetail,
    HomePage,
    TabsPage,
    Order,
    Evaluate,
    TakeorderSuccess,
    Nurse,
    NurseDetail,
    NurseserviceList,
    NurseserviceDetail,
    NurseserviceOrder,
    Company,
    CompanyDetail,
    CompanyOrder,
    UserFile,
    Myfollows,
    Purse,
    Coupon,
    NurseListComponent,
    ShowMap,
    Login,
    Setup,
    Locate
  ],
  imports: [
  HttpModule,
  JsonpModule,
  BrowserModule,
  BaiduMapModule,
  Ionic2RatingModule, // Put ionic2-rating module here
  CityPickerModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    KnowledgePage,
    ArticleDetail,
    HomePage,
    TabsPage,
    Order,
    Evaluate,
    TakeorderSuccess,
    Nurse,
    NurseDetail,
    NurseserviceList,
    NurseserviceDetail,
    NurseserviceOrder,
    Company,
    CompanyDetail,
    CompanyOrder,
    UserFile,
    Myfollows,
    Purse,
    Coupon,
    NurseListComponent,
    ShowMap,
    Login,
    Setup,
    Locate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CityPickerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
