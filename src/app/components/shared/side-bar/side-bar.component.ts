import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  isLoggedIn: boolean = false
  userRole: string = ""
  @Input('sidebarActiveSubject') sidebarActiveSubject:Subject<any>;
  active : number = -1
  constructor(private auth: AuthService){
  }
  ngOnInit(): void {
    this.sidebarActiveSubject.subscribe(e =>{
      this.active = -1
    });
    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
    }
  }

}
