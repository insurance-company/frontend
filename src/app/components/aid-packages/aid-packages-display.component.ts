import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {  NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { AuthService } from 'src/app/services/auth.service';
import { CreateAidPackageComponent } from './create-aid-package/create-aid-package.component';
import { BuyAidPackageComponent } from './buy-aid-package/buy-aid-package.component';
import { UpdateAidPackageComponent } from './update-aid-package/update-aid-package.component';

@Component({
  selector: 'paketi-pomoci',
  templateUrl: './aid-packages-display.component.html',
  styleUrls: ['./aid-packages-display.component.css']
})
export class AidPackagesDisplayComponent implements OnInit {

  aidPackages = new MatTableDataSource<any>();
  displayedColumns: string[] = ["tip", "cena", "pokrice", "trajanjeUMesecima", "actions"]
  isLoggedIn: boolean = false
  userRole: string = ""
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private aidPackageService: AidPackageService, private dialog: MatDialog, private auth: AuthService, private toast: NgToastService){}


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
    }
   this.aidPackageService.getAll(this.pageNumber).subscribe(res=>{
    this.aidPackages = new MatTableDataSource(res.data);
    this.totalCount = res.totalCount
   })
  }

  
  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.aidPackageService.getAll(this.pageNumber).subscribe(res=>{
      this.aidPackages = new MatTableDataSource(res.data);
      this.totalCount = res.totalCount
     })
  }

  buyAidPackage(row: any){
    let dialogRef = this.dialog.open(BuyAidPackageComponent, {
      disableClose: true,
    });
    dialogRef.componentInstance.description = row.description
    dialogRef.componentInstance.price = row.price
    dialogRef.componentInstance.cover = row.cover
    dialogRef.componentInstance.aidPackageId = row.id
    dialogRef.componentInstance.durationInMonths = row.durationInMonths
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      
    });
  }

  Remove(row: any){
    console.log(row.id)
    this.aidPackageService.Remove(row.id).subscribe({
      next:(res)=>{
        this.toast.success({detail: "SUCCESS", summary: "Uspešno izbrisan paket pomoći!", duration: 5000});
        this.aidPackageService.getAll(this.pageNumber).subscribe(res=>{
          this.aidPackages = new MatTableDataSource(res.data);
          this.totalCount = res.totalCount
         })
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  }

  openDialog(){
    let dialogRef = this.dialog.open(CreateAidPackageComponent, {
      disableClose: true,
    });
     
    dialogRef.componentInstance.onSubmit.subscribe(() => {
      this.aidPackages = new MatTableDataSource<any>()
      this.aidPackageService.getAll(this.pageNumber).subscribe({
        next:(res)=>{
          this.aidPackages.data = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    })
  }

  openUpdateDialog(row: any){
    
    let dialogRef = this.dialog.open(UpdateAidPackageComponent, {
      disableClose: true,
    });

    dialogRef.componentInstance.id = row.id
    dialogRef.componentInstance.description = row.description
    dialogRef.componentInstance.price = row.price
    dialogRef.componentInstance.cover = row.cover
    dialogRef.componentInstance.durationInMonths = row.durationInMonths

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.aidPackages = new MatTableDataSource<any>()
      this.aidPackageService.getAll(this.pageNumber).subscribe({
        next:(res)=>{
          this.aidPackages.data = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    });
  }
}
