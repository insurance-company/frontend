import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllBuyers(pageNumber: number) : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/User/getAllBuyers/' + pageNumber + '/4')
  }
}
