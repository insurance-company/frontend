import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  getAllByBuyerId(pageNumber: number) : Observable<any>{
    const buyerId = this.auth.getLoggedUserId()
    return this.http.get<any>('https://localhost:7213/api/SignedPolicy/getAllByBuyerId/' + buyerId + '/' + pageNumber + '/4')
  }
}
