import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { AccidentService } from 'src/app/services/accident.service';
import { ICar } from 'src/app/model/Car';
import { PolicyService } from 'src/app/services/policy.service';
import { AidPackageService } from 'src/app/services/aidPackage.service';

@Component({
  selector: 'update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  public id : any = 0
  public registerNumber : any = ""
  public brand: number = 0
  public model: number = 0 
  public years: number = 0

  constructor(private carService: CarService, private toast: NgToastService){}

  
  formCar : FormGroup = new FormGroup({
    id: new FormControl(),
    registerNumber: new FormControl(null, [Validators.required]),
    brand: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    years: new FormControl(null, [Validators.required])
  });


  ngOnInit(): void {
    this.formCar.controls["id"].setValue(this.id)
    this.formCar.controls["registerNumber"].setValue(this.registerNumber)
    this.formCar.controls["brand"].setValue(this.brand)
    this.formCar.controls["model"].setValue(this.model)
    this.formCar.controls["years"].setValue(this.years)
  }


  Update(){
    this.carService.Update(this.formCar.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesna izmena automobila!", duration: 5000});
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
