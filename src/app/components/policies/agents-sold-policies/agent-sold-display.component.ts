import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'users-policies-display',
  templateUrl: './agent-sold-policies-display.component.html',
  styleUrls: ['./agent-sold-policies-display-component.css']
})
export class AgentSoldPoliciesDisplayComponent implements OnInit {

  policies:[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private policyService: PolicyService){}


  ngOnInit(): void {
   this.policyService.getAllByAgentId(this.pageNumber).subscribe(res=>{
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
