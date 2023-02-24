import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://localhost:7213/api/User/"
  constructor(private http: HttpClient, private router: Router) { }

  register(userObj: any){
    return this.http.post<any>('https://localhost:7213/api/User/register', userObj)
  }

  login(loginObj: any) : Observable<any> {
    return this.http.post<any>('https://localhost:7213/api/User/authenticate', loginObj)
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
}
