import { Component, OnInit } from '@angular/core';
import { IAccident } from 'src/app/model/Accident';
import { AccidentService } from 'src/app/services/accident.service';

@Component({
  selector: 'validacija-nesreca',
  templateUrl: './accident-validation.component.html',
  styleUrls: ['./accident-validation.component.css']
})
export class AccidentValidationComponent implements OnInit {

  accidents:IAccident[] = []
  pageNumber: number = 0
  totalCount: number = 0


  constructor(private accidentService: AccidentService){}


  ngOnInit(): void {
   this.accidentService.getAllUnvalidated(this.pageNumber).subscribe(res=>{
    this.accidents = res.data
    this.totalCount = res.totalCount
   })
  }

  onPageChanged(e : any){
    this.pageNumber = e.pageIndex;
    this.accidentService
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
