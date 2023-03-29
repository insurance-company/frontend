import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { AccidentService } from 'src/app/services/accident.service';
import { ICar } from 'src/app/model/Car';
import { PolicyService } from 'src/app/services/policy.service';
import { MatTableDataSource } from '@angular/material/table';

function timeValidator(c: FormControl) {
  const chosenTime = new Date(c.value)
  if(chosenTime > new Date()) {
    return {dateValidator: {valid: false}};
  }
  else {
      return null
  }
}


@Component({
  selector: 'report-accident',
  templateUrl: './report-accident.component.html',
  styleUrls: ['./report-accident.component.css']
})

export class ReportAccidentComponent implements OnInit {

  policies = new MatTableDataSource<any>([])
  selectedPolicyCarId : number = -1 
  selectedPolicyAidPackageId : number = -1 
  rowHovered : boolean = false
  displayedColumns: string[] = ["car", "description", "cover"]
  constructor(private policyService: PolicyService, private accidentService: AccidentService, private toast: NgToastService){}
  onSubmit = new EventEmitter()
  
  formDate : FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required, timeValidator]),
  });

  formDescription : FormGroup = new FormGroup({
    description: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
    this.policyService.getAllValidByCustomer().subscribe({
      next:(res)=>{
        this.policies = res
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  report(){
    this.accidentService.create({id: 0, towingDuration: -1, towingStartTime: new Date(), date: this.formDate.controls['date'].value, description: this.formDescription.controls['description'].value, policyCarId: this.selectedPolicyCarId, policyAidPackageId: this.selectedPolicyAidPackageId, towTruckId: -1, status: 2}).subscribe({
        next:(res)=>{
          this.toast.success({detail: "SUCCESS", summary: "Uspesna prijava nesrece!", duration: 5000});
          this.onSubmit.emit()
        }, error:(err)=>{

        }
    })
  }  

  
  selectRow(row: any){
    console.log(row)
    this.selectedPolicyCarId = row.carId
    this.selectedPolicyAidPackageId = row.aidPackageId
  } 

  hoverRow(hover: boolean){
    this.rowHovered = hover
  }

}
