import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IAccident } from 'src/app/model/Accident';
import { AccidentService } from 'src/app/services/accident.service';
import { ReportAccidentComponent } from './report-accident/report-accident.component';

@Component({
  selector: 'prikaz-korisnikovih-nesreca',
  templateUrl: './users-accidents-display.component.html',
  styleUrls: ['./users-accidents-display.component.css']
})
export class UsersAccidentsDisplayComponent implements OnInit {

  accidents:IAccident[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private accidentService: AccidentService, private dialog: MatDialog){}


  ngOnInit(): void {
   this.accidentService.getAllByUserId(this.pageNumber).subscribe(res=>{
    this.accidents = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.accidentService
      .getAllByUserId(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.accidents = res.data
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

  openDialog(){
    let dialogRef = this.dialog.open(ReportAccidentComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.accidents = []
      this.pageNumber = 0
      this.accidentService.getAllByUserId(this.pageNumber).subscribe({
        next:(res)=>{
          this.accidents = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    });
  }

}
