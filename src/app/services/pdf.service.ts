import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  generatePolicyPDF(policyId: number) : Observable<any>{
    const buyerId = this.auth.getLoggedUserId()
    return this.http.get('https://localhost:7213/api/PDF/getPolicyPDF?id=' + policyId, {observe: 'response', responseType: 'blob'})
  }
}
