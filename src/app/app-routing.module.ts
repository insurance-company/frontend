import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentValidationComponent } from './components/accidents/accident-validation/accident-validation.component';
import { UsersAccidentsDisplayComponent } from './components/accidents/users-accidents-display/users-accidents-display.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BranchesDisplayComponent } from './components/branches/branches-display.component';
import { LoginComponent } from './components/login/login/login.component';
import { AidPackagesDisplayComponent} from './components/aid-packages/aid-packages-display.component';
import { UsersPoliciesDisplayComponent } from './components/policies/users-policies/users-policies-display.component';
import { CustomersDisplayComponent } from './components/customers-display/customers-display.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AgentSoldPoliciesDisplayComponent } from './components/policies/agents-sold-policies/agent-sold-display.component';
import { RegisterManagerComponent } from './components/register/register-manager/register-manager.component';
import { RegisterAgentComponent } from './components/register/register-agent/register-agent.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UnsignedPoliciesComponent } from './components/policies/unsigned-policies/unsigned-policies.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registracija', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'kupci', component: CustomersDisplayComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['AGENT', 'MANAGER']}},
  {path: 'paketi-pomoci', component: AidPackagesDisplayComponent},
  {path: 'filijale', component: BranchesDisplayComponent},
  {path: 'profil', component:UserProfileComponent, canActivate : [AuthGuard]},
  {path: 'nesrece', component: UsersAccidentsDisplayComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['CUSTOMER']}},
  {path: 'prijavljene-nesrece', component: AccidentValidationComponent , canActivate: [AuthGuard, RoleGuard], data: { role: ['MANAGER']}},
  {path: 'polise', component: UsersPoliciesDisplayComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['CUSTOMER']}},
  {path: 'potpisane-polise', component: AgentSoldPoliciesDisplayComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['AGENT']}},
  {path: 'registracija-menadzera', component: RegisterManagerComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['ADMIN']}},
  {path: 'registracija-agenta', component: RegisterAgentComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['MANAGER']}},
  {path: 'statistike', component: StatisticsComponent , canActivate: [AuthGuard, RoleGuard], data: { role: ['MANAGER']}},
  {path: 'nepotpisane-polise', component: UnsignedPoliciesComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['AGENT']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
