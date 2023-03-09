import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IAidPackage } from '../model/AidPackage';
import { IAidPackagePage } from '../model/pages/AidPackagesPage';

@Injectable({
  providedIn: 'root'
})
export class AidPackageService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll() : Observable<IAidPackage[]>{
    return this.http.get<IAidPackage[]>('https://localhost:7213/api/AidPackage')
  }

  Create(aidPackage: IAidPackage) : Observable<any> {
    return this.http.post<any>('https://localhost:7213/api/AidPackage/Create', aidPackage)
  }

  Update(aidPackage: IAidPackage) : Observable<any> {
    return this.http.put<any>('https://localhost:7213/api/AidPackage/Update', aidPackage)
  }

  Remove(id: number) : Observable<any>{
    return this.http.delete<any>('https://localhost:7213/api/AidPackage/Remove?aidPackageId=' + id)
  }

}
