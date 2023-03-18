import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { AccidentService } from 'src/app/services/accident.service';
import { ICar } from 'src/app/model/Car';

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

  cars: ICar[] = []
  constructor(private carService: CarService, private accidentService: AccidentService, private toast: NgToastService){}

  
  formDate : FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required, timeValidator]),
  });

  formCarId : FormGroup = new FormGroup({
    carId: new FormControl(null, [Validators.required])
  })

  formDescription : FormGroup = new FormGroup({
    description: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
    this.carService.getAllByOwner().subscribe({
      next:(res)=>{
        this.cars = res
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  report(){
    this.accidentService.create({id: 0, towingDuration: -1, towingStartTime: new Date(), date: this.formDate.controls['date'].value, description: this.formDescription.controls['description'].value, carId: this.formCarId.controls['carId'].value, towTruckId: -1, status: 2}).subscribe({
        next:(res)=>{
          this.toast.success({detail: "SUCCESS", summary: "Uspesna prijava nesrece!", duration: 5000});
        }, error:(err)=>{

        }
    })
  }  

}
