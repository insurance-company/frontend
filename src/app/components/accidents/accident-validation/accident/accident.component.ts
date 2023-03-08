import { Component, Input, OnInit } from '@angular/core';
import { IAccident } from 'src/app/model/Accident';


@Component({
  selector: 'nesreca',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  @Input() accident: any

  constructor(){}


  ngOnInit(): void {
    if (this.accident.status == "0") this.accident.status = "VALIDNA"
    else if (this.accident.status == "1") this.accident.status = "NEVALIDNA"
    else this.accident.status = "CEKA NA VALIDACIJU"
  }

}
