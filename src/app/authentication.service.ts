import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor(private http:Http){

  }

  login():Observable<any>{
    return this.http.get('./data.json')
    .map(
      (resp)=>{resp.json()},
      (err)=>{
        console.log(err);
      }
    ) 
  }
}
