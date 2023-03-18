import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAccident } from '../model/Accident';
import { IAgency } from '../model/Agency';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  get() : Observable<IAgency>{
    return this.http.get<IAgency>('https://localhost:7213/api/Agency')
  }
}
