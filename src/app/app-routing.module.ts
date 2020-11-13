import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SendComponent } from './send/send.component';
import { SignalsComponent } from './signals/signals.component';
import { NewsComponent } from './news/news.component';
import { SDetailsComponent } from './signals/s-details/s-details.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'send/:id', component: SendComponent},
  {path: 'signals', component: SignalsComponent},
  {path: 'detail/:id', component: SDetailsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'alerts', component: AlertsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
