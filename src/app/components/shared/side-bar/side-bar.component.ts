import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLoggedIn: boolean = false
  userRole: string = ""
  constructor(private auth: AuthService){
  }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
    }
  }
}
