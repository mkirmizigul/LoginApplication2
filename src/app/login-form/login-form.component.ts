import { Component, OnInit,Input} from '@angular/core';
import {FormControl, FormGroup, FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input('fromType') formType :String
  
    formTitle = 'Giris Yapin'
    buttonText='Giris'
    isLogin=true

    usernameCtrl = new FormControl('', Validators.required)
    passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)])
    loginForm : FormGroup
  constructor(private fb:FormBuilder,private router:Router,private user:UserService) { 

      this.loginForm = fb.group({
      username:this.usernameCtrl,
      password:this.passwordCtrl
    })

  }

  ngOnInit() {
    this.formType =='Login'
    this.isLogin = true;
    
  }


    loginUser(e){
      e.preventDefault();
      console.log(e);
      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;
  
      if(username == 'admin' && password =='admin1') {
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
  
      }
  
    }
  
  }
 


