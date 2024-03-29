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
import { SharedModule } from './components/shared/shared.module';
import { BranchesDisplayComponent } from './components/branches/branches-display.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CustomersDisplayComponent } from './components/customers-display/customers-display.component';
import { UsersPoliciesDisplayModule } from './components/policies/users-policies/users-policies-display.module';
import { UsersAccidentsDisplayModule } from './components/accidents/users-accidents-display/users-accidents-display.module';
import { AccidentValidationModule } from './components/accidents/accident-validation/accident-validation.module';
import { AgentSoldPoliciesDisplayModule } from './components/policies/agents-sold-policies/agent-sold-policies-display.module';
import { AidPackagesDisplayModule } from './components/aid-packages/aid-packages-display.module';
import { RegisterManagerComponent } from './components/register/register-manager/register-manager.component';
import { RegisterAgentComponent } from './components/register/register-agent/register-agent.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UnsignedPoliciesModule } from './components/policies/unsigned-policies/unsigned-policies.module';
import { CarsDisplayModule } from './components/cars/cars-display.module';
import { BranchesDisplayModule } from './components/branches/branches-display.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterManagerComponent,
    RegisterAgentComponent,
    CustomersDisplayComponent,
    UserProfileComponent,
    StatisticsComponent
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
    UsersAccidentsDisplayModule,
    AccidentValidationModule,
    UsersPoliciesDisplayModule,
    AgentSoldPoliciesDisplayModule,
    AidPackagesDisplayModule,
    UnsignedPoliciesModule,
    CarsDisplayModule,
    BranchesDisplayModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
