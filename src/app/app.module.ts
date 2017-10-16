import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthguardGuard} from './authguard.guard';
import {UserService} from './user.service';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
const appRoutes:Routes = [
  {
    path:'users',
    //component: UserComponent,
    children: [
      {
        path:':name',
        component: UserComponent
      },
      {
        path:":name/:id",
        component: UserComponent
      }
    ]
  },
  {
    path:'dashboard',
    canActivate:[AuthguardGuard],
    component: DashboardComponent
  },
  {
    path:'',
    component: LoginFormComponent
  },
  {
  path:'**',
  component: NotfoundComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
