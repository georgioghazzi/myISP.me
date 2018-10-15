import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  resposeData : any;
  userData = {"email":"", "password":""};

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
    let data ="email="+this.userData.email+"&"+"password="+this.userData.password

   if(this.userData.email && this.userData.password){
    this.authService.postData(data,"page-login?").then((result) =>{
    this.resposeData =  result ;
        if( this.resposeData.status == 1){
      console.log(this.resposeData.status);
     localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.presentToast("Welcome Back "+this.resposeData.FirstName+" "+this.resposeData.LastName);
      this.navCtrl.push("WelcomePage")
  }
  else{
    this.presentToast("Please give valid username and password");
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Give username and password");
   }
  
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
