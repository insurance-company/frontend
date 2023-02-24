import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './display-buyers.component.html',
  styleUrls: ['./display-buyers.component.css']
})
export class DisplayBuyersComponent implements OnInit {

  public users : any = []

  constructor(private userService: UserService){}


  ngOnInit(): void {
   this.userService.getAllBuyers().subscribe(res=>{
    this.users = res
   })
  }

}
