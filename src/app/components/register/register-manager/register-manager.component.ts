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
  templateUrl: './register-manager.component.html',
  styleUrls: ['./register-manager.component.css']
})
export class RegisterManagerComponent {

  hide: boolean = true
  branches: IBranch[] = []
  workers: IUser[] = []
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private branchService: BranchService, private userService: UserService, private toast: NgToastService, private router: Router) {}

  ngOnInit(): void {

    this.branchService.getAllWithoutPagination().subscribe({
      next:(res) => {
        this.branches = res
      }
    })

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
      managesTheBranchId: [, Validators.required]
    })
  }

  onSubmit(){
    this.registerForm.controls['bossId'].setValue(parseInt(this.registerForm.controls['bossId'].value))
    this.registerForm.controls['managesTheBranchId'].setValue(parseInt(this.registerForm.controls['managesTheBranchId'].value))
    console.log(this.registerForm.value)
    this.auth.registerManager(this.registerForm.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesna registracija menadzera!", duration: 5000});
        console.log(res)
      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
        console.log(err)
      }
    })
  }
}
