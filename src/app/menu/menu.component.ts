import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  isVisible():boolean{
    if(this.authService.isLogin()){
      return true;
    }else{
      return false;
    }
  }

}
