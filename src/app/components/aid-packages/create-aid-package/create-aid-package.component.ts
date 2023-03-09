import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';

@Component({
  selector: 'create-aid-package',
  templateUrl: './create-aid-package.component.html',
  styleUrls: ['./create-aid-package.component.css']
})
export class CreateAidPackageComponent implements OnInit {


  constructor(private aidPackageService: AidPackageService, private toast: NgToastService){}

  
  formDescription = new FormGroup({
    description: new FormControl(),
  });

  formPrice = new FormGroup({
    price: new FormControl()
  })

  formCover = new FormGroup({
    cover: new FormControl()
  })

  formDurationInMonths = new FormGroup({
    durationInMonths: new FormControl()
  })


  ngOnInit(): void {}


  Create(){
    this.aidPackageService.Create({id: 0, description: this.formDescription.controls.description.value, price: this.formPrice.controls.price.value, cover: this.formCover.controls.cover.value, durationInMonths: this.formDurationInMonths.controls.durationInMonths.value}).subscribe({
      next: (res) =>{
        this.toast.success({detail: "SUCCESS", summary: "Uspesno kreiranje paketa!", duration: 5000});
      }, error: (err) =>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
