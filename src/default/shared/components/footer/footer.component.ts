/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang: string;
  today: number = Date.now();
  constructor(public listSandbox: ListsSandbox, 
    public translate: TranslateService,
    public router: Router
    ) { 
    this.lang = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'): 'es';
  }
    // initially calls listSandbox getPageList
  ngOnInit() {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keyword = '';
    this.listSandbox.getPageList(params);
    this.translate.use(this.lang.toString());
    sessionStorage.setItem('lang', this.lang.toString());
  }
    // dowload link for mobile app
    downloadApp() {
        window.open('https://play.google.com/store/apps/details?id=com.piccosoft.spurtcommerce');
    }
    openLink(link) {
      window.open(link);

    }

    changeLang(lang){
      this.translate.use(lang);
      sessionStorage.setItem('lang', lang);
      this.router.navigate(['/']);
  }
}
