import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as jwtDecode  from 'jwt-decode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetpwdComponent } from './auth/resetpwd/resetpwd.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';
import { TransportComponent } from './transport/transport.component';
import { AddtransportationComponent } from './dashboard/addtransportation/addtransportation.component';
import { GetforumsComponent } from './getforums/getforums.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { ListeReservationComponent } from './dashboard/liste-reservation/liste-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetpwdComponent,
    ConfirmPasswordComponent,
    TransportComponent,
    AddtransportationComponent,
    GetforumsComponent,
    AddForumComponent,
    ListeReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
