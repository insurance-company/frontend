import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllBuyers(pageNumber: number) : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/User/getAllBuyers/' + pageNumber + '/4')
  }

  getAllWorkers() : Observable<IUser[]>{
    return this.http.get<IUser[]>('https://localhost:7213/api/User/getAllWorkers')
  }
}
