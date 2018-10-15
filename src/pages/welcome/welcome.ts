import { InvoiceDataProvider } from './../../providers/invoice-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public InvoiceDataProvider: InvoiceDataProvider) {
  }

  getData(){
    this.InvoiceDataProvider.getData().then((result) =>{
      console.log(result);

    }, (err) => {
      //Connection failed message
    });
  }

}
