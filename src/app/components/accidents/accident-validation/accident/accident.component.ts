import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IAccident } from 'src/app/model/Accident';
import { AccidentService } from 'src/app/services/accident.service';


@Component({
  selector: 'accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  @Input() accident: any
  @Output() removeAccidentEvent = new EventEmitter<number>();
  @Output() openDialogEvent = new EventEmitter<any>();
  buttonClicked : boolean = false

  constructor(private accidentService: AccidentService, private toast: NgToastService){}


  ngOnInit(): void {
    if (this.accident.status == "0") this.accident.status = "VALIDNA"
    else if (this.accident.status == "1") this.accident.status = "NEVALIDNA"
    else this.accident.status = "CEKA NA VALIDACIJU"
  }

  valid(accident: IAccident){
    this.buttonClicked = true
    this.openDialogEvent.emit(accident)
  }

  invalid(accident: IAccident){
    this.buttonClicked = true
    accident.status = 1
    this.accidentService.validate(accident).subscribe({
      next : (res) => {
        this.toast.success({detail: "SUCCESS", summary:"Nesreca uspesno validirana!"})
        this.removeAccidentEvent.emit(accident.id)
      }, error : (err) => {

      }
    })
  
  } 

}
