import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { AccidentService } from 'src/app/services/accident.service';
import { ICar } from 'src/app/model/Car';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'buy-aid-package',
  templateUrl: './buy-aid-package.component.html',
  styleUrls: ['./buy-aid-package.component.css']
})
export class BuyAidPackageComponent implements OnInit {

  public description : any = ""
  public price: any
  public cover: any
  public durationInMonths: any
  public aidPackageId: any
  cars: ICar[] = []

  constructor(private carService: CarService, private policyService: PolicyService, private toast: NgToastService){}

  
  formDescription = new FormGroup({
    description: new FormControl(),
  });

  formCarId = new FormGroup({
    carId: new FormControl()
  })


  ngOnInit(): void {
    this.carService.getAllByOwnerId().subscribe({
      next:(res)=>{
        this.cars = res
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  buy(){
    this.policyService.buyPolicy({id: 0, aidPackageId: this.aidPackageId, carId: this.formCarId.controls.carId.value, agentId:0, date: new Date()}).subscribe({
        next:(res)=>{
          this.toast.success({detail: "SUCCESS", summary: "Uspesan zahtev za kupovinu polise!", duration: 5000});
        }, error:(err)=>{

        }
    })
  } 
}
