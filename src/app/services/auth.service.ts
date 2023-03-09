import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '../model/User';
import { IManager } from '../model/Manager';
import { IAgent } from '../model/Agent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://localhost:7213/api/User/"
  private userPayload: any
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken()
   }

  register(userObj: IUser){
    return this.http.post<any>('https://localhost:7213/api/Auth/register', userObj)
  }

  registerManager(manager: any){
    return this.http.post<any>('https://localhost:7213/api/Auth/registerManager', manager)
  }

  registerAgent(agent: IAgent){
    return this.http.post<any>('https://localhost:7213/api/Auth/registerAgent', agent)
  }

  login(loginObj: any) : Observable<any> {
    return this.http.post<any>('https://localhost:7213/api/Auth/authenticate', loginObj)
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn() : boolean{
    return !!localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

  decodeToken(){
    const jwtHelper = new JwtHelperService()
    const token = this.getToken()!
    return jwtHelper.decodeToken(token)
  }

  getCurrentUser() : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/User/getById/' + this.userPayload.id)
  }

  getFullName() {
    return this.userPayload.name
  }

  getLoggedUserId(){
    return this.userPayload.id
  }

  getRole(){
    return this.userPayload.role
  }
}
