import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private toast: NgToastService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

          var routeRoles = []
          if (!!route.data['role']) {
            routeRoles = route.data['role'];
            const loggedUserRole = this.auth.getRole();
              if (routeRoles.includes(loggedUserRole)) {
                return true;
              }
          }
          
        this.toast.error({detail: "ERROR", summary : 'Odbijen pristup!', duration: 3000});
        return false;
  } 
}
