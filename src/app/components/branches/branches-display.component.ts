import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { IBranch } from 'src/app/model/Branch';
import { AuthService } from 'src/app/services/auth.service';
import { BranchService } from 'src/app/services/branch.service';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';

@Component({
  selector: 'branches-display',
  templateUrl: './branches-display.component.html',
  styleUrls: ['./branches-display.component.css']
})
export class BranchesDisplayComponent implements OnInit {

  branches = new MatTableDataSource<IBranch>();
  displayedColumns: string[] = ["adresa", "actions"]
  pageNumber: number = 0
  totalCount: number = 0
  isLoggedIn: boolean = false
  userRole: string = ""

  constructor(private branchService: BranchService, private toast: NgToastService, private auth: AuthService, private dialog: MatDialog){}


  ngOnInit(): void {

    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
    }

   this.branchService.getAll(this.pageNumber).subscribe(res=>{
    this.branches.data = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.branchService
      .getAll(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.branches.data = res.data;
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

  Remove(row: any){
    console.log(row.id)
    this.branchService.Remove(row.id).subscribe({
      next:(res)=>{
        this.toast.success({detail: "SUCCESS", summary: "Uspešno izbrisana filijala!", duration: 5000});
        this.branchService.getAll(this.pageNumber).subscribe(res=>{
          this.branches.data = res.data
          this.totalCount = res.totalCount
         })
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  }

  openDialog(){
    let dialogRef = this.dialog.open(CreateBranchComponent, {
      disableClose: true,
    });

    dialogRef.componentInstance.onSubmit.subscribe(() => {
      this.branches = new MatTableDataSource<IBranch>()
      this.branchService.getAll(this.pageNumber).subscribe({
        next:(res)=>{
          this.branches.data = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    })     
  }

  openUpdateDialog(row: any){
    
    let dialogRef = this.dialog.open(UpdateBranchComponent, {
      disableClose: true,
    });

    dialogRef.componentInstance.id = row.id
    dialogRef.componentInstance.street = row.address.street
    dialogRef.componentInstance.number = row.address.number
    dialogRef.componentInstance.city = row.address.city
    dialogRef.componentInstance.country = row.address.country
    dialogRef.componentInstance.agencyId = row.agency.id

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.branches = new MatTableDataSource<IBranch>()
      this.branchService.getAll(this.pageNumber).subscribe({
        next:(res)=>{
          this.branches.data = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    });
  }
}
