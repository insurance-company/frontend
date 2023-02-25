import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './components/shared/shared.module';
import { PaketiPomociComponent } from './components/paketi-pomoci/paketi-pomoci.component';
import { FilijaleComponent } from './components/filijale/filijale.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PrikazKorisnikovihNesrecaComponent } from './components/nesreca/prikaz-korisnikovih-nesreca/prikaz-korisnikovih-nesreca.component';
import { PrikazKorisnikovihNesrecaModule } from './components/nesreca/prikaz-korisnikovih-nesreca/prikaz-korisnikovih-nesreca.module';
import { ValidacijaNesrecaModule } from './components/nesreca/validacija-nesreca/validacija-nesreca.module';
import { PrikazKupacaComponent } from './components/prikaz-kupaca/prikaz-kupaca.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PrikazKupacaComponent,
    PaketiPomociComponent,
    FilijaleComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    SharedModule,
    PrikazKorisnikovihNesrecaModule,
    ValidacijaNesrecaModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
