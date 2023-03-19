import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {  NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';


@Component({
  selector: 'cars-display',
  templateUrl: './cars-display.component.html',
  styleUrls: ['./cars-display.component.css']
})
export class CarsDisplayComponent implements OnInit {

  cars = new MatTableDataSource<any>();
  displayedColumns: string[] = ["registerNumber", "brand", "model", "years", "actions"]
  isLoggedIn: boolean = false

  constructor(private carService: CarService, private dialog: MatDialog, private auth: AuthService, private toast: NgToastService){}


  ngOnInit(): void {
   this.carService.getAllByOwner().subscribe(res=>{
    this.cars = new MatTableDataSource(res);
   })
  }

  

  /*addCar(row: any){
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
  }*/

  Remove(row: any){
    console.log(row.id)
    this.carService.Remove(row.id).subscribe({
      next:(res)=>{
        this.toast.success({detail: "SUCCESS", summary: "Uspesno izbrisan automobil!", duration: 5000});
        this.carService.getAllByOwner().subscribe(res=>{
          this.cars = new MatTableDataSource(res);
         })
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  }

  
  openDialog(){
    let dialogRef = this.dialog.open(CreateCarComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.cars = new MatTableDataSource<any>()
      this.carService.getAllByOwner().subscribe({
        next:(res)=>{
          this.cars = res
        }, error:(err)=>{

        }
      })  
    });
  }

  openUpdateDialog(row: any){
    
    let dialogRef = this.dialog.open(UpdateCarComponent, {
      disableClose: true,
    });

    dialogRef.componentInstance.id = row.id
    dialogRef.componentInstance.registerNumber = row.registerNumber
    dialogRef.componentInstance.brand = row.brand
    dialogRef.componentInstance.model = row.model
    dialogRef.componentInstance.years = row.years

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.cars = new MatTableDataSource<any>()
      this.carService.getAllByOwner().subscribe({
        next:(res)=>{
          this.cars.data = res
        }, error:(err)=>{

        }
      })  
    });
  }
}
