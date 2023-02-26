import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilijaleService } from 'src/app/services/filijale.service';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'polisa',
  templateUrl: './polisa.component.html',
  styleUrls: ['./polisa.component.css']
})
export class PolisaComponent implements OnInit {

  @Input() polisa: any

  constructor(){}


  ngOnInit(): void {
  }

}
