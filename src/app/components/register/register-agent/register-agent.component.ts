import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { IBranch } from 'src/app/model/Branch';
import { IUser } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent {

  hide: boolean = true
  workers: IUser[] = []
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private branchService: BranchService, private userService: UserService, private toast: NgToastService, private router: Router) {}

  ngOnInit(): void {

    this.userService.getAllWorkers().subscribe({
      next:(res) => {
        this.workers = res
      }
    })

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      uniqueMasterCitizenNumber:['', [Validators.required, Validators.pattern("[0-9]{13}")]],
      phoneNumber:['', Validators.required],
      address:['', Validators.required],
      gender:[0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: [1],
      bossId: [0], 
      licenceNumber: ['', Validators.required]
    })
  }

  onSubmit(){
    this.registerForm.controls['bossId'].setValue(parseInt(this.registerForm.controls['bossId'].value))
    console.log(this.registerForm.value)
    this.auth.registerAgent(this.registerForm.value).subscribe({
      next: (res) => {
          this.toast.success({detail: "SUCCESS", summary: "Uspesna registracija agenta!", duration: 5000});
      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
        console.log(err.error)
      }
    })
  }
}
