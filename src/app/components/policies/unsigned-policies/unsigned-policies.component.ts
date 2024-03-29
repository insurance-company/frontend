import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PolicyService } from 'src/app/services/policy.service';
import { ExportToPdfComponent } from './export-to-pdf/export-to-pdf.component';

@Component({
  selector: 'unsigned-policies',
  templateUrl: './unsigned-policies.component.html',
  styleUrls: ['./unsigned-policies.component.css']
})
export class UnsignedPoliciesComponent implements OnInit {

  policies:[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private policyService: PolicyService, private dialog: MatDialog){}


  ngOnInit(): void {
   this.policyService.getAllUnsigned(this.pageNumber).subscribe(res=>{
    console.log(res.data)
    this.policies = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.policyService.getAllUnsigned(this.pageNumber).subscribe({
        next: (res) => {
          this.policies = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

  removePolicy(evt: any){
    this.pageNumber = 0
    this.policyService.getAllUnsigned(this.pageNumber).subscribe({
        next: (res) => {
          this.policies = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

  openDialog(evt: any){
    let dialogRef = this.dialog.open(ExportToPdfComponent, {
      disableClose: true,
    });
    dialogRef.componentInstance.aidPackageId = evt.aidPackageId
    dialogRef.componentInstance.carId = evt.carId
  }


}
