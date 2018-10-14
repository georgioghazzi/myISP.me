import { Login } from './../login/login';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Login;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
