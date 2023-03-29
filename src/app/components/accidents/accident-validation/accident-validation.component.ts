import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { timeout } from 'rxjs';
import { IAccident } from 'src/app/model/Accident';
import { AccidentService } from 'src/app/services/accident.service';
import { ValidAccidentDialogComponent } from './valid-accident-dialog/valid-accident-dialog.component';

@Component({
  selector: 'validacija-nesreca',
  templateUrl: './accident-validation.component.html',
  styleUrls: ['./accident-validation.component.css']
})
export class AccidentValidationComponent implements OnInit {

  accidents: any[] = []
  pageNumber: number = 0
  totalCount: number = 0
  


  constructor(private accidentService: AccidentService, private dialog: MatDialog,private toast: NgToastService){}


  ngOnInit(): void {
   this.accidentService.getAllUnvalidated(this.pageNumber).subscribe(res=>{
    console.log(res.data)
    this.accidents = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.accidentService
      .getAllUnvalidated(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.accidents = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }


  removeAccident(){
    this.pageNumber = 0;
    this.accidentService.getAllUnvalidated(this.pageNumber).subscribe({
        next: (res) => {
          this.accidents = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

  openDialog(accident: any){
    let dialogRef = this.dialog.open(ValidAccidentDialogComponent, {
      disableClose: true,
    });
    dialogRef.componentInstance.accident = accident
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'canceled') return
      if (result == 'withoutTowTruck'){
        accident.status = 0
        //accident.towingStartTime = this.startTimeForm.controls.startTime.value
        //accident.towingDuration = this.durationForm.controls.duration.value
        accident.towTruckId = -1
        this.accidentService.validate(accident).subscribe({
          next : (res) => {
            this.toast.success({detail: "SUCCESS", summary:"Nesreća uspesno validirana!"})
            this.removeAccident()
          }, error : (err) => {
            console.log("error")
          }
        })
      } else {
        this.removeAccident()
      }
    });
  }
}
