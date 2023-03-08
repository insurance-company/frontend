import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBranch } from 'src/app/model/Branch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'branches-display',
  templateUrl: './branches-display.component.html',
  styleUrls: ['./branches-display.component.css']
})
export class BranchesDisplayComponent implements OnInit {

  branches = new MatTableDataSource<IBranch>();
  displayedColumns: string[] = ["adresa"]
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private branchService: BranchService){}


  ngOnInit(): void {
   this.branchService.getAll(this.pageNumber).subscribe(res=>{
    this.branches = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.branchService
      .getAll(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.branches = new MatTableDataSource(res.data);
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

}
