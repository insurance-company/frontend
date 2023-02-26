import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilijaleComponent } from './components/filijale/filijale.component';
import { LoginComponent } from './components/login/login/login.component';
import { PrikazKorisnikovihNesrecaComponent } from './components/nesreca/prikaz-korisnikovih-nesreca/prikaz-korisnikovih-nesreca.component';
import { ValidacijaNesrecaComponent } from './components/nesreca/validacija-nesreca/validacija-nesreca.component';
import { PaketiPomociComponent } from './components/paketi-pomoci/paketi-pomoci.component';
import { PrikazKorisnikovihPolisaComponent } from './components/polise/prikaz-korisnikovih-polisa/prikaz-korisnikovih-polisa.component';
import { PrikazKupacaComponent } from './components/prikaz-kupaca/prikaz-kupaca.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registracija', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'kupci', component: PrikazKupacaComponent},
  {path: 'paketi-pomoci', component: PaketiPomociComponent},
  {path: 'filijale', component: FilijaleComponent},
  {path: 'profil', component:UserProfileComponent},
  {path: 'nesrece', component: PrikazKorisnikovihNesrecaComponent},
  {path: 'prijavljene-nesrece', component: ValidacijaNesrecaComponent},
  {path: 'polise', component:PrikazKorisnikovihPolisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
