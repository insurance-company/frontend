import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IAgency } from 'src/app/model/Agency';
import { AgencyService } from 'src/app/services/agency.service';
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
  agency : IAgency = {name: "", pib: ""}

  constructor(private auth: AuthService, private agencyService: AgencyService){
  }
  ngOnInit(): void {

    this.agencyService.get().subscribe({
      next : (res) => {
        this.agency = res
      }, error : (err) => {
        console.log(err)
      }
    })

    this.sidebarActiveSubject.subscribe(e =>{
      this.active = -1
    });
    this.isLoggedIn = this.auth.isLoggedIn()
    if (this.isLoggedIn){
      this.userRole = this.auth.getRole()
      if (localStorage.getItem('login') == "true") {
        if (this.userRole == "MANAGER") this.active = 10
        else if (this.userRole == "AGENT") this.active = 11
        else  this.active = 1
        localStorage.setItem('login', "false")
      }
    }
  }

}
