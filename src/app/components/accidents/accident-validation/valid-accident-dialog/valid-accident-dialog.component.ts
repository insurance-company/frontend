import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { IAccident } from 'src/app/model/Accident';
import { AccidentService } from 'src/app/services/accident.service';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { PdfService } from 'src/app/services/pdf.service';
import { TowTruckService } from 'src/app/services/towTruck.service';

function timeValidator(c: FormControl) {
  const chosenTime = new Date(c.value)
  if(chosenTime < new Date()) {
    return {dateValidator: {valid: false}};
  }
  else {
      return null
  }
}

@Component({
  selector: 'valid-accident-dialog',
  templateUrl: './valid-accident-dialog.component.html',
  styleUrls: ['./valid-accident-dialog.component.css']
})
export class ValidAccidentDialogComponent implements OnInit {

  accident : any 
  towTruck : boolean = false
  towTrucks = new MatTableDataSource<any>([])
  selectedTruckId : number = -1 
  rowHovered : boolean = false
  displayedColumns: string[] = ["towingService", "length", "width", "transportCapacity"]
  constructor(private towTruckService: TowTruckService, private accidentService: AccidentService, private toast: NgToastService, private dialogRef: MatDialogRef<ValidAccidentDialogComponent>){}


  startTimeForm : FormGroup = new FormGroup({
    startTime: new FormControl(null, [Validators.required, timeValidator]),
  });

  durationForm : FormGroup = new FormGroup({
    duration: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {}
  

  bookTowTruck(){
    this.towTruck = true
  }

  findAvailableTowTrucks(){
    this.towTruckService.getAvailable(this.startTimeForm.controls['startTime'].value, this.durationForm.controls['duration'].value).subscribe({
      next : (res) => {
        this.towTrucks.data = res
        console.log(res)
      }, error : (err) => {
        console.log("error")
      }
    })
  }

  selectRow(row: any){
    console.log(row)
    this.selectedTruckId = row.id
  } 

  hoverRow(hover: boolean){
    this.rowHovered = hover
  }
 
  validate(){
    this.accident.status = 0
    this.accident.towingStartTime = this.startTimeForm.controls['startTime'].value
    this.accident.towingDuration = this.durationForm.controls['duration'].value
    this.accident.towTruckId = this.selectedTruckId
    this.accidentService.validate(this.accident).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary:"Nesreca uspesno validirana!"})
        this.dialogRef.close("towTruckBooked")
      }, error : (err) => {
        console.log("error")
      }
    })
  }
}
