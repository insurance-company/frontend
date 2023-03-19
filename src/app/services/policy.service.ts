import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISignedPolicy } from '../model/SignedPolicy';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  getAllByBuyerId(pageNumber: number) : Observable<any>{
    const buyerId = this.auth.getLoggedUserId()
    return this.http.get<any>('https://localhost:7213/api/Policy/getAllByBuyerId/' + buyerId + '/' + pageNumber + '/4')
  }

  getAllByAgentId(pageNumber: number) : Observable<any>{
    const agentId = this.auth.getLoggedUserId()
    return this.http.get<any>('https://localhost:7213/api/Policy/getAllByAgentId/' + agentId + '/' + pageNumber + '/4')
  }

  getAllUnsigned(pageNumber: number) : Observable<any>{
    const agentId = this.auth.getLoggedUserId()
    return this.http.get<any>('https://localhost:7213/api/Policy/getAllUnsigned/' + pageNumber + '/4')
  }

  buyPolicy(policy: ISignedPolicy){
    return this.http.post<ISignedPolicy>('https://localhost:7213/api/Policy/buyPolicy', policy)
  }

  signOrDecline(policy: any, sign: boolean) : Observable<any> {
    console.log(policy)
    return this.http.put<any>('https://localhost:7213/api/Policy/SignOrDecline?sign=' + sign + '&policyId=' + policy.id, {})
  }

  getAllValidByCustomer() : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/Policy/getAllValidByCustomer')
  }
}
