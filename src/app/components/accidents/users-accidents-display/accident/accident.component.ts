import { Component, Input, OnInit } from '@angular/core';
import { IAccident } from 'src/app/model/Accident';


@Component({
  selector: 'accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  @Input() accident: IAccident | any
  status: string = ""

  constructor(){}


  ngOnInit(): void {
    if (this.accident.status == "0") this.status = "VALIDNA"
    else if (this.accident.status == "1") this.status = "NEVALIDNA"
    else this.status = "CEKA NA VALIDACIJU"
  }

}
