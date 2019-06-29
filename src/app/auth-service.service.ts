import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

let apiUrl = 'http://127.0.0.1:8000/fypbackend.test/api/'



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http: Http) { }

  register(data){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl+'users', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }
}
