import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  registerForm!: FormGroup
  user:any
  isDisabled:boolean=true
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private router: Router) {}
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      ime: ["", Validators.required],
      prezime: ["", Validators.required],
      jmbg:["", Validators.required],
      brojTelefona:["", Validators.required],
      adresa:["", Validators.required],
      pol:[0, Validators.required],
      email: ["", Validators.required],
    })

    this.auth.getCurrentUser().subscribe({
      next : (res) =>{
        this.user = res
        console.log(res)
        this.registerForm.controls["ime"].setValue(this.user.ime)  
        this.registerForm.controls["prezime"].setValue(this.user.prezime)
        this.registerForm.controls["jmbg"].setValue(this.user.jmbg)
        this.registerForm.controls["brojTelefona"].setValue(this.user.brojTelefona)
        this.registerForm.controls["adresa"].setValue(this.user.adresa)
        this.registerForm.controls["pol"].setValue(this.user.pol)
        this.registerForm.controls["email"].setValue(this.user.email)      
        this.registerForm.disable()
      }, 
      error : (err) => {

      }
    })
  }

}
