import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'prikaz-korisnikovih-nesreca',
  templateUrl: './prikaz-korisnikovih-nesreca.component.html',
  styleUrls: ['./prikaz-korisnikovih-nesreca.component.css']
})
export class PrikazKorisnikovihNesrecaComponent implements OnInit {

  accidents:[] = []
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private nesrecaService: NesrecaService){}


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

}
