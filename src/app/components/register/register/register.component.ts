import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide : boolean = true
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      uniqueMasterCitizenNumber:['',[Validators.required, Validators.pattern("[0-9]{13}")]],
      phoneNumber:['', Validators.required],
      address: this.fb.group({
        street : ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      }),
      gender:[0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: [0]
    })
  }

  onSubmit(){
    this.auth.register(this.registerForm.value).subscribe({
      next: (res) => {
        window.setTimeout(() => {timeout: 2000})
        this.auth.storeToken(res.token)
        localStorage.setItem('login', "true")
        this.toast.success({detail: "SUCCESS", summary: "Uspesna registracija!", duration: 2000});
          setTimeout(() =>{
            console.log("eeee")
            this.router.navigate(['/paketi-pomoci']).then(() => {
              window.location.reload();
            })
          }, 2000)
      },
      error: (err) => {
        this.toast.error({detail: "ERROR", summary: err.error, duration: 5000});
        console.log(err)
      }
    })
  }
}
