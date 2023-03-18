import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TowTruckService {

  constructor(private http: HttpClient) { }

  getAvailable(startTime: Date, duration: number) : Observable<any>{
    return this.http.get<any>('https://localhost:7213/api/TowTruck/GetAvaliable?startTime=' + startTime + '&duration=' + duration)
  }
}
