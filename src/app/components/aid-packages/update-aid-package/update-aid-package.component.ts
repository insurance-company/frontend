import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { AccidentService } from 'src/app/services/accident.service';
import { ICar } from 'src/app/model/Car';
import { PolicyService } from 'src/app/services/policy.service';
import { AidPackageService } from 'src/app/services/aidPackage.service';

@Component({
  selector: 'update-aid-package',
  templateUrl: './update-aid-package.component.html',
  styleUrls: ['./update-aid-package.component.css']
})
export class UpdateAidPackageComponent implements OnInit {

  public id : any = 0
  public description : any = ""
  public price: number = 0
  public cover: number = 0 
  public durationInMonths: number = 0

  constructor(private aidPackageService: AidPackageService, private toast: NgToastService){}

  
  formPackage = new FormGroup({
    id: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    cover: new FormControl(),
    durationInMonths: new FormControl()
  });


  ngOnInit(): void {
    this.formPackage.controls.id.setValue(this.id)
    this.formPackage.controls.description.setValue(this.description)
    this.formPackage.controls.price.setValue(this.price)
    this.formPackage.controls.cover.setValue(this.cover)
    this.formPackage.controls.durationInMonths.setValue(this.durationInMonths)
  }


  Update(){
    this.aidPackageService.Update(this.formPackage.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesna izmena paketa!", duration: 5000});
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
