import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBranch } from '../model/Branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(pageNumber: number) : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/Branch/getAll/' + pageNumber + '/4')
  }

  getAllWithoutPagination() : Observable<IBranch[]>{
    return this.http.get<IBranch[]>('https://localhost:7213/api/Branch/getAllWithoutPagination')
  }
}
