import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ISignedPolicy } from 'src/app/model/SignedPolicy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'polisa',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  @Input() policy: any
  @Output() removePolicyEvent = new EventEmitter<number>();
  @Output() openDialogEvent = new EventEmitter<number>();
  signSpinner : boolean = false
  declineSpinner : boolean = false
  clickButton: boolean = false;

  constructor(private policyService: PolicyService, private toast: NgToastService){}


  ngOnInit(): void {
  }

  sign(policy: ISignedPolicy){
    this.clickButton = true;
    this.signSpinner = true
    this.policyService.signOrDecline(policy, true).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesno potpisana polisa!", duration: 5000});
        this.removePolicyEvent.emit(policy.id);
        this.openDialogEvent.emit(policy.id)
        console.log("success");
      }, error: (err) => {
        console.log("err");
      }
    })
  }

  decline(policy: ISignedPolicy){
    this.clickButton = true;
    this.declineSpinner = true
    this.policyService.signOrDecline(policy, false).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesno odbijena polisa", duration: 5000});
        this.removePolicyEvent.emit(policy.id);
      }, error: (err) => {
        console.log("err");
      }
    })
  }

}
