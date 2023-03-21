import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICar } from '../model/Car';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  getAllByOwner() : Observable<any>{
    return this.http.get<ICar[]>('https://localhost:7213/api/Car/getAllByOwner')
  }

  getAllAvailableToPurchaseAidPackage(aidPackageId: number) : Observable<any> {
    return this.http.get<ICar[]>('https://localhost:7213/api/Car/getAllAvailableToPurchaseAidPackage?aidPackageId=' + aidPackageId)
  }

  Create(car: ICar) : Observable<any> {
    return this.http.post<any>('https://localhost:7213/api/Car/Create', car)
  }

  Update(car: ICar) : Observable<any> {
    return this.http.put<any>('https://localhost:7213/api/Car/Update', car)
  }

  Remove(id: number) : Observable<any>{
    return this.http.delete<any>('https://localhost:7213/api/Car/Remove?carId=' + id)
  }
}
