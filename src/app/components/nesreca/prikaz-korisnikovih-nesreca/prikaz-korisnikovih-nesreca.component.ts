import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'prikaz-korisnikovih-nesreca',
  templateUrl: './prikaz-korisnikovih-nesreca.component.html',
  styleUrls: ['./prikaz-korisnikovih-nesreca.component.css']
})
export class PrikazKorisnikovihNesrecaComponent implements OnInit {

  nesrece:[] = []

  constructor(private nesrecaService: NesrecaService){}


  ngOnInit(): void {
   this.nesrecaService.getAll().subscribe(res=>{
    this.nesrece = res
   })
  }

}
