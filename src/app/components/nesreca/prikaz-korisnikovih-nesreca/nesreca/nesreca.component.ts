import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilijaleService } from 'src/app/services/filijale.service';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'nesreca',
  templateUrl: './nesreca.component.html',
  styleUrls: ['./nesreca.component.css']
})
export class NesrecaComponent implements OnInit {

  @Input() nesreca: any

  constructor(){}


  ngOnInit(): void {
    if (this.nesreca.status == "0") this.nesreca.status = "VALIDNA"
    else if (this.nesreca.status == "1") this.nesreca.status = "NEVALIDNA"
    else this.nesreca.status = "CEKA NA VALIDACIJU"
  }

}
