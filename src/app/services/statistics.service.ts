import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAccident } from '../model/Accident';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  GetNumberOfAgentSignedPoliciesPerMonth(agentId: number, year: number) : Observable<any>{
    return this.http.get<number[]>('https://localhost:7213/api/Statistics/GetNumberOfAgentSignedPoliciesPerMonth?agentId=' + agentId + '&year=' + year)
  }

  GetNumberOfAccidentsPerMonth(year: number) : Observable<any>{
    return this.http.get<number[]>('https://localhost:7213/api/Statistics/GetNumberOfAccidentsPerMonth?year=' + year)
  }
}
