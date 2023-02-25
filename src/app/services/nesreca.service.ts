import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NesrecaService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  getAll() : Observable<any>{
    const userId = this.auth.getLoggedUserId()
    return this.http.get<any>('https://localhost:7213/api/Nesreca/getAllByUserId/' + userId)
  }

  getAllUnvalidated() : Observable<any> {
    return this.http.get<any>('https://localhost:7213/api/Nesreca/getAllUnvalidated')
  }
}
