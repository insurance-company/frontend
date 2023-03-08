import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAccident } from '../model/Accident';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  getAllByUserId(pageNumber: number) : Observable<any>{
    const userId = this.auth.getLoggedUserId()
    return this.http.get<IAccident[]>('https://localhost:7213/api/Accident/getAllByUserId/' + userId + '/' + pageNumber + '/4')
  }

  getAllUnvalidated(pageNumber: number) : Observable<any> {
    return this.http.get<IAccident[]>('https://localhost:7213/api/Accident/getAllUnvalidated/' + pageNumber + '/4')
  }

  create(accident: IAccident) : Observable<any>{
    return this.http.post<any>('https://localhost:7213/api/Accident/createAccident', accident)
  }
}
