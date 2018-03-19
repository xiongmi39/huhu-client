import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ArticleDetail } from './article-detail/article-detail';

@Component({
  selector: 'page-knowledge',
  templateUrl: 'knowledge.html'
})
export class KnowledgePage {

  constructor(public navCtrl: NavController) {

  }

  goArticleDetail(){
  	this.navCtrl.push(ArticleDetail);
  }
}
