import { Component, OnInit } from '@angular/core';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'validacija-nesreca',
  templateUrl: './validacija-nesreca.component.html',
  styleUrls: ['./validacija-nesreca.component.css']
})
export class ValidacijaNesrecaComponent implements OnInit {

  accidents:[] = []
  pageNumber: number = 0
  totalCount: number = 0


  constructor(private nesrecaService: NesrecaService){}


  ngOnInit(): void {
   this.nesrecaService.getAllUnvalidated(this.pageNumber).subscribe(res=>{
    this.accidents = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.nesrecaService
      .getAllUnvalidated(this.pageNumber)
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
