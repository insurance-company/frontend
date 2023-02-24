import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.toast.success({detail: "SUCCESS", summary: res.message, duration: 5000});
        this.auth.storeToken(res.token)
        this.router.navigate(['dashboard'])

      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  }
}
