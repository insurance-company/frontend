import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      uniqueMasterCitizenNumber:['', Validators.required],
      phoneNumber:['', Validators.required],
      address:['', Validators.required],
      gender:[0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: [0]
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Uspesna registracija!", duration: 5000});
        console.log(res)
      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
        console.log(err)
      }
    })
  }
}
