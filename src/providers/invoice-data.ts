import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the InvoiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl= "http://185.38.29.121/myisp/api/";
@Injectable()
export class InvoiceDataProvider {

  constructor(public http: Http) {
    console.log('Hello invoice-data Provider');
}

getData(){

  return new Promise((resolve, reject) =>{
    let headers = new Headers();
    this.http.post(apiUrl+"List-Invoices", {headers: headers}).
    subscribe(res =>{
    {
      
        resolve(res.json());
      }
        
    }, (err) =>{

      console.log("sorry.")
      reject(err);
    });

  });
}
}
