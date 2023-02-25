import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './prikaz-kupaca.component.html',
  styleUrls: ['./prikaz-kupaca.component.css']
})
export class PrikazKupacaComponent implements OnInit {


  kupci = new MatTableDataSource<any>();
  displayedColumns: string[] = ["ime", "jmbg", "brojTelefona", "email"]
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private userService: UserService){}


  ngOnInit(): void {
   this.userService.getAllBuyers(this.pageNumber).subscribe(res=>{
    this.kupci = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.userService
      .getAllBuyers(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.kupci = new MatTableDataSource(res.data);
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

}
