import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IPolicy } from 'src/app/model/Policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'polisa',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  @Input() policy: any
  @Output() removePolicyEvent = new EventEmitter<any>();
  @Output() openDialogEvent = new EventEmitter<any>();
  signSpinner : boolean = false
  declineSpinner : boolean = false
  clickButton: boolean = false;

  constructor(private policyService: PolicyService, private toast: NgToastService){}


  ngOnInit(): void {
  }

  sign(policy: IPolicy){
    this.clickButton = true;
    this.signSpinner = true
    this.policyService.signOrDecline(policy, true).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspešno potpisana polisa!", duration: 5000});
        this.removePolicyEvent.emit({"aidPackageId": policy.aidPackageId, "carId": policy.carId});
        this.openDialogEvent.emit({"aidPackageId": policy.aidPackageId, "carId": policy.carId})
        console.log("success");
      }, error: (err) => {
        console.log("err");
      }
    })
  }

  decline(policy: IPolicy){
    this.clickButton = true;
    this.declineSpinner = true
    this.policyService.signOrDecline(policy, false).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspešno odbijena polisa!", duration: 5000});
        this.removePolicyEvent.emit({aidPackageId: policy.aidPackageId, carId: policy.carId});
      }, error: (err) => {
        console.log("err");
      }
    })
  }

}
