
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

/** sende bu yok neden yok bilmiyorum ama yok işte */

@Injectable()
export class AuthenticationService {

  constructor(private http:Http){

  }

  login(context:FormContext):Promise<any>{

    let findUser:FormContext[];
    
    return this.http.get('../assets/data.json') 
    /** bu dosya dan kullanıcıları doğruluyor aslında güzelde doğruluyor
     * ama doğrular ken beklemiyor method şu aşağıdaki foreach i
     * onun için kendi filterlarıyla bişey yapmaya çalışıyorum data.json da şu
     */
    .map((resp:Response)=><FormContext[]>resp.json())
    .map(x=>{
      localStorage.setItem("login","ok");
      return x.filter(x=>x.username===context.username&&x.password===context.password)
    })
      
      
      /*findUser.forEach(element => {
        if(element.username==context.username&&element.password==context.password){
          localStorage.setItem("login","ok");
          return JSON.stringify(element);
        } // burayı görüyor musun neyse bak şimdi
      });*/
    
  .toPromise()
  .catch(err=>{
      return Observable.throw(err);
    });
  }

  isLogin():boolean{

    let status=localStorage.getItem("login");

    return status==="ok"? true : false;
  }
}

export interface FormContext {
  username: string;
  password: string;
}
