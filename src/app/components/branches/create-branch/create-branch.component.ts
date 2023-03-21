import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { BranchService } from 'src/app/services/branch.service';
import { __values } from 'tslib';

@Component({
  selector: 'create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {


  constructor(private branchService: BranchService, private toast: NgToastService){}

  
  formStreet: FormGroup = new FormGroup({
    street: new FormControl(null, Validators.required),
  });

  formNumber: FormGroup = new FormGroup({
    number: new FormControl(null, [Validators.required])
  })

  formCity : FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required])
  })

  formCountry : FormGroup = new FormGroup({
    country: new FormControl(null, [Validators.required])
  })


  ngOnInit(): void {}


  Create(){
    this.branchService.Create({id: 0, address: {street: this.formStreet.controls['street'].value, number: this.formNumber.controls['number'].value, city: this.formCity.controls['city'].value, country: this.formCountry.controls['country'].value}, agencyId: -1}).subscribe({
      next: (res) =>{
        this.toast.success({detail: "SUCCESS", summary: "Uspesno kreiranje filijale!", duration: 5000});
      }, error: (err) =>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
