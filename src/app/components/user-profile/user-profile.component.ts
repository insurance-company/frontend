import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { IUser } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  registerForm!: FormGroup
  user: IUser | any
  isDisabled:boolean=true
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private router: Router) {}
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      uniqueMasterCitizenNumber:["", Validators.required],
      phoneNumber:["", Validators.required],
      address:["", Validators.required],
      gender:[0, Validators.required],
      email: ["", Validators.required],
    })

    this.auth.getCurrentUser().subscribe({
      next : (res) =>{
        this.user = res
        console.log(res)
        this.registerForm.controls["firstName"].setValue(this.user.firstName)  
        this.registerForm.controls["lastName"].setValue(this.user.lastName)
        this.registerForm.controls["uniqueMasterCitizenNumber"].setValue(this.user.uniqueMasterCitizenNumber)
        this.registerForm.controls["phoneNumber"].setValue(this.user.phoneNumber)
        this.registerForm.controls["address"].setValue(this.user.address)
        this.registerForm.controls["gender"].setValue(this.user.gender)
        this.registerForm.controls["email"].setValue(this.user.email)      
        this.registerForm.disable()
      }, 
      error : (err) => {

      }
    })
  }

}
