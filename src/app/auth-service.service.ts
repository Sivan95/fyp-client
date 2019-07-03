import { Injectable, OnInit } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import { HTTP, HTTPResponse } from '@ionic-native/http';
import { HTTP } from '@ionic-native/http/ngx';
import {Headers, RequestOptions } from '@angular/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';


//let apiUrl = 'http://127.0.0.1:8000/fypBackend.test/api';
let apiUrl = 'http://fypBackend.test/api/';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit {

  constructor(public http: HttpClient) { }
  ngOnInit(){}

  register(data){
    return new Promise(() => {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
   // const requestOptions = new RequestOptions({ headers: headers });

    this.http.post("http://fypBackend.test/api/users", JSON.stringify(data), {headers:{}})
    .subscribe(data => {
      console.log(data['_body']);
    }, error => {
     console.log(error);
     console.log(error.status);
     console.log(error.error); // error message as string
     console.log(error.headers);
     console.log('Fuck not working')
   });
  })
}
}
      




    /*return new Promise<any>((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'data');

      //this.http.post(apiUrl+'/users', JSON.stringify(data), {headers: headers})

      this.http.post(apiUrl+'users', data, {})
      .then(res => {
        console.log('Data inserted')
      }, (err) => {
        console.log('Not Working')
        reject(err);
      });
    });
  }
}*/