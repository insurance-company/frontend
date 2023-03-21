import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {

  public id : any = 0
  public street : any = ""
  public number: any = ""
  public city: any = "" 
  public country: any = ""
  public agencyId: number = -1

  constructor(private branchService: BranchService, private toast: NgToastService){}

  
  formPackage : FormGroup = new FormGroup({
    id: new FormControl(),
    address: new FormGroup({
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required])
    }),
    agencyId: new FormControl()
  });


  ngOnInit(): void {
    this.formPackage.setValue({
      id: this.id,
      address: {
        street: this.street,
        number: this.number,
        city: this.city,
        country: this.country
      },
      agencyId: this.agencyId
    })
  }


  Update(){
    this.branchService.Update(this.formPackage.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesna izmena filijale!", duration: 5000});
      },
      error: (err)=>{
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  } 
}
