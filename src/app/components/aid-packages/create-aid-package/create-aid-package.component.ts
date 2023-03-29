import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { __values } from 'tslib';

@Component({
  selector: 'create-aid-package',
  templateUrl: './create-aid-package.component.html',
  styleUrls: ['./create-aid-package.component.css']
})
export class CreateAidPackageComponent implements OnInit {

  constructor(private aidPackageService: AidPackageService, private toast: NgToastService){}
  onSubmit = new EventEmitter()
  
  formDescription = new FormGroup({
    description: new FormControl("", Validators.required),
  });

  formPrice: FormGroup = new FormGroup({
    price: new FormControl(null, [Validators.required])
  })

  formCover : FormGroup = new FormGroup({
    cover: new FormControl(null, [Validators.required])
  })

  formDurationInMonths : FormGroup = new FormGroup({
    durationInMonths: new FormControl(null, [Validators.required])
  })


  ngOnInit(): void {}


  Create(){
    this.aidPackageService.Create({id: 0, description: this.formDescription.controls.description.value?.toString() , price: this.formPrice.controls['price'].value, cover: this.formCover.controls['cover'].value, durationInMonths: this.formDurationInMonths.controls['durationInMonths'].value}).subscribe({
      next: (res) =>{
        this.toast.success({detail: "SUCCESS", summary: "Uspesno kreiranje paketa!", duration: 5000});
        this.onSubmit.emit()
      }, error: (err) =>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
