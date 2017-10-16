import { Component, OnInit,Input} from '@angular/core';
import {FormControl, FormGroup, FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
//import {UserService} from '../user.service';

import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
    formTitle = 'Giriş Yapın'
    buttonText='Giris'
    isLogin=false
    error:string="";
    loginForm : FormGroup

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthenticationService) { 

    this.createLoginForm(); // bu sende yok

  }

  ngOnInit() {
    
    this.isLogin = true;
  }


    loginUser(){
// bu method ta undefine geliyor şu res salaklığından bence
/**
 * aslında çalışmadı inek
 * hata verdi :) json.filter diye bişey yokmuş ama stackoverflow da var gibiydi bakalım yani orayı filtrelesem bitti iş
 * allah cezasını versin bunların
 */
      this.auth.login(this.loginForm.value).then(res=>{
        console.log("başarılı");
        res.length>0?this.router.navigate(['/dashboard'],{replaceUrl:true}):this.error="Kullanıcı adı ya da parolası hatalı";
      })
  
    }
    /**validasyon sadece bu kadar gösteriyorum bu senin projen */
    private createLoginForm() {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
  }
 


