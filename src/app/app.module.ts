import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AuthServiceService} from '../app/auth-service.service'
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';
import { ListPage } from './list/list.page';
import { FormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';
import { RegisterPageModule } from './register/register.module';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    //HomePage,
    //RegisterPage,
    AppComponent,
    ListPage
  ],
  entryComponents: [
    HomePage,
    RegisterPage,
    AppComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HomePageModule,
    RegisterPageModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
