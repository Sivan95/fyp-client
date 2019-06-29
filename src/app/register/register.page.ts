import { Component} from '@angular/core';
import { NavController,LoadingController, ToastController } from '@ionic/angular';
import {AuthServiceService} from '../auth-service.service';


@Component({
  selector: 'page-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  loading: any;
  regData = {name: '', icNumber: '', email: '', 
            password: '', phone: '', address: '', 
            cityState: '', houseType: '', category:''};
  

  constructor(public navCtrl: NavController, public authService: AuthServiceService, public loadingCtr: LoadingController, private toastCtrl: ToastController) { }

  doSignup(){
    this.showLoader();
    this.authService.register(this.regData).then((result)=>{
      this.loading.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtr.create({
      //content: 'Authenticating..'
    });
    this.loading.present();
  }
  async presentToast(msg){
    const toast  = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
    /*await toast.ionToastDidDismiss(() => {
      console.log('Dismissed toast');
    });*/
    //return await toast.present();
  }

}
