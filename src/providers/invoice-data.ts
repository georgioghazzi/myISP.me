import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the InvoiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvoiceDataProvider {

  constructor(public http: Http) {
    console.log('Hello InvoiceDataProvider Provider');
  }

}
