import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn:boolean = false;
  //@Output() loginEvent = new EventEmitter<boolean>();
  user: any;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    //this.authService.getCurrentUser().subscribe(data=>{this.user = data});
  }

  logout() {
    this.authService.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
   // this.loginEvent.emit(this.isLoggedIn);
  }
}
