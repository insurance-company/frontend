import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { CarService } from 'src/app/services/car.service';
import { __values } from 'tslib';

@Component({
  selector: 'create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {


  constructor(private carService: CarService, private toast: NgToastService){}
  onSubmit = new EventEmitter()
  
  formRegisterNumber = new FormGroup({
    registerNumber: new FormControl("", Validators.required),
  });

  formBrand: FormGroup = new FormGroup({
    brand: new FormControl(null, [Validators.required])
  })

  formModel : FormGroup = new FormGroup({
    model: new FormControl(null, [Validators.required])
  })

  formYears : FormGroup = new FormGroup({
    years: new FormControl(null, [Validators.required])
  })


  ngOnInit(): void {}


  Create(){
    this.carService.Create({id: 0, registerNumber: this.formRegisterNumber.controls.registerNumber.value?.toString() , brand: this.formBrand.controls['brand'].value, model: this.formModel.controls['model'].value, years: this.formYears.controls['years'].value}).subscribe({
      next: (res) =>{
        this.toast.success({detail: "SUCCESS", summary: "Uspesno dodat novi automobil!", duration: 5000});
        this.onSubmit.emit()
      }, error: (err) =>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
