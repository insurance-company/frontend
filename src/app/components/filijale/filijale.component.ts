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

  constructor(private filijaleService: FilijaleService){}


  ngOnInit(): void {
   this.filijaleService.getAll().subscribe(res=>{
    this.filijale = res
   })
  }

}
