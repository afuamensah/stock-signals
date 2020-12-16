import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SendComponent } from './send/send.component';
import { SignalsComponent } from './signals/signals.component';
import { NewsComponent } from './news/news.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SDetailsComponent } from './signals/s-details/s-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ChartsComponent } from './charts/charts.component';
import { AddSignalsComponent } from './signals/add-signals/add-signals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SendComponent,
    SignalsComponent,
    NewsComponent,
    ForgotComponent,
    SDetailsComponent,
    NavbarComponent,
    AlertsComponent,
    ChartsComponent,
    AddSignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
