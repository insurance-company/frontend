import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IAidPackage } from 'src/app/model/AidPackage';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { AuthService } from 'src/app/services/auth.service';
import { BuyAidPackageComponent } from './buy-aid-package/buy-aid-package.component';

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

  constructor(private aidPackageService: AidPackageService, private dialog: MatDialog, private auth: AuthService){}


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
    }
   this.aidPackageService.getAll().subscribe(res=>{
    this.aidPackages = new MatTableDataSource(res);
    console.log(res)
   })
  }

  buyAidPackage(row: any){
    let dialogRef = this.dialog.open(BuyAidPackageComponent, {
      disableClose: true,
    });
    dialogRef.componentInstance.description = row.description
    dialogRef.componentInstance.price = row.price
    dialogRef.componentInstance.cover = row.cover
    dialogRef.componentInstance.aidPackageId = row.Id
    dialogRef.componentInstance.durationInMonths = row.durationInMonths
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      
    });
  }

}
