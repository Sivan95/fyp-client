import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { RegisterPage } from '../register/register.page';

//import {RegisterPage} from '../../app/register/register.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController){}
  /*public registerPage(){
    this.navCtrl.navigateForward('/register');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }*/
  public registerPage(){
    // Let's navigate from TabsPage to Page1
    this.navCtrl.navigateForward('/register');
 }

}
