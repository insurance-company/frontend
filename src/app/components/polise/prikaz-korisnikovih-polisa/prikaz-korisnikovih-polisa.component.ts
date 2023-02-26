import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NesrecaService } from 'src/app/services/nesreca.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'prikaz-korisnikovih-polisa',
  templateUrl: './prikaz-korisnikovih-polisa.component.html',
  styleUrls: ['./prikaz-korisnikovih-polisa.component.css']
})
export class PrikazKorisnikovihPolisaComponent implements OnInit {

  policies:[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private policyService: PolicyService){}


  ngOnInit(): void {
   this.policyService.getAllByBuyerId(this.pageNumber).subscribe(res=>{
    this.policies = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.policyService
      .getAllByBuyerId(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.policies = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

}
