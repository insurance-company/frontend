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

  hide: boolean = true
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
        this.auth.storeToken(res.token)   
        const role = this.auth.getRole() 
        localStorage.setItem('login', "true")
        if (role == "MANAGER")
          this.router.navigate(['/statistike']).then(() => {
            window.location.reload();
          })
        else if (role == "AGENT")
          this.router.navigate(['/nepotpisane-polise']).then(() => {
            window.location.reload();
          })
        else 
          this.router.navigate(['/paketi-pomoci']).then(() => {
            window.location.reload();
          })
      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
      }
    })
  }
}
