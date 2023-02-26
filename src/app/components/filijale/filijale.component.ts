import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilijaleService } from 'src/app/services/filijale.service';

@Component({
  selector: 'filijale',
  templateUrl: './filijale.component.html',
  styleUrls: ['./filijale.component.css']
})
export class FilijaleComponent implements OnInit {

  filijale = new MatTableDataSource<any>();
  displayedColumns: string[] = ["adresa"]
  pageNumber: number = 0
  totalCount: number = 0

  constructor(private filijaleService: FilijaleService){}


  ngOnInit(): void {
   this.filijaleService.getAll(this.pageNumber).subscribe(res=>{
    this.filijale = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.filijaleService
      .getAll(this.pageNumber)
      .subscribe({
        next: (res) => {
          this.filijale = new MatTableDataSource(res.data);
          this.totalCount = res.totalCount;
        },
        error: (err) => {
          console.log("error " + err.status)
        }
      });
  }

}
