import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
}
