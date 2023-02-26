import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilijaleService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(pageNumber: number) : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/BranchOffice/getAll/' + pageNumber + '/4')
  }
}
