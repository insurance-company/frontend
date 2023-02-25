import { Component, OnInit } from '@angular/core';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'validacija-nesreca',
  templateUrl: './validacija-nesreca.component.html',
  styleUrls: ['./validacija-nesreca.component.css']
})
export class ValidacijaNesrecaComponent implements OnInit {

  nesrece:[] = []

  constructor(private nesrecaService: NesrecaService){}


  ngOnInit(): void {
   this.nesrecaService.getAllUnvalidated().subscribe(res=>{
    this.nesrece = res
   })
  }

}
