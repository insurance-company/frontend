import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentValidationComponent } from './components/accidents/accident-validation/accident-validation.component';
import { UsersAccidentsDisplayComponent } from './components/accidents/users-accidents-display/users-accidents-display.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BranchesDisplayComponent } from './components/branches/branches-display.component';
import { LoginComponent } from './components/login/login/login.component';
import { AidPackagesDisplayComponent} from './components/aid-packages/aid-packages-display.component';
import { UsersPoliciesDisplayComponent } from './components/polise/prikaz-korisnikovih-polisa/users-policies-display.component';
import { CustomersDisplayComponent } from './components/customers-display/customers-display.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AgentSoldPoliciesDisplayComponent } from './components/polise/agents-sold-policies/agent-sold-display.component';
import { RegisterManagerComponent } from './components/register/register-manager/register-manager.component';
import { RegisterAgentComponent } from './components/register/register-agent/register-agent.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registracija', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'kupci', component: CustomersDisplayComponent},
  {path: 'paketi-pomoci', component: AidPackagesDisplayComponent},
  {path: 'filijale', component: BranchesDisplayComponent},
  {path: 'profil', component:UserProfileComponent},
  {path: 'nesrece', component: UsersAccidentsDisplayComponent},
  {path: 'prijavljene-nesrece', component: AccidentValidationComponent},
  {path: 'polise', component:UsersPoliciesDisplayComponent},
  {path: 'prodate-polise', component: AgentSoldPoliciesDisplayComponent},
  {path: 'registracija-menadzera', component: RegisterManagerComponent},
  {path: 'registracija-agenta', component: RegisterAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
