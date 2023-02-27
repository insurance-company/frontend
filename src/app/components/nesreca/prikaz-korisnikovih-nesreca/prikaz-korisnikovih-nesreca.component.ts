import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NesrecaService } from 'src/app/services/nesreca.service';
import { PrijavaNesreceComponent } from './prijava-nesrece/prijava-nesrece.component';

@Component({
  selector: 'prikaz-korisnikovih-nesreca',
  templateUrl: './prikaz-korisnikovih-nesreca.component.html',
  styleUrls: ['./prikaz-korisnikovih-nesreca.component.css']
})
export class PrikazKorisnikovihNesrecaComponent implements OnInit {

  accidents:[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private nesrecaService: NesrecaService, private dialog: MatDialog){}


  ngOnInit(): void {
   this.nesrecaService.getAllByUserId(this.pageNumber).subscribe(res=>{
    this.accidents = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.nesrecaService
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
    let dialogRef = this.dialog.open(PrijavaNesreceComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.accidents = []
      this.pageNumber = 0
      this.nesrecaService.getAllByUserId(this.pageNumber).subscribe({
        next:(res)=>{
          this.accidents = res.data
          this.totalCount = res.totalCount
        }, error:(err)=>{

        }
      })  
    });
  }

}
