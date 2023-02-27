import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CarService } from 'src/app/services/car.service';
import { NesrecaService } from 'src/app/services/nesreca.service';

@Component({
  selector: 'prijava-nesrece',
  templateUrl: './prijava-nesrece.component.html',
  styleUrls: ['./prijava-nesrece.component.css']
})
export class PrijavaNesreceComponent implements OnInit {

  cars: any[] = []

  constructor(private carService: CarService, private accidentService: NesrecaService, private toast: NgToastService){}

  
  formDatum = new FormGroup({
    datum: new FormControl(),
  });

  formAutoId = new FormGroup({
    autoId: new FormControl()
  })

  formOpis = new FormGroup({
    opis: new FormControl()
  })

  ngOnInit(): void {
    this.carService.getAllByOwnerId().subscribe({
      next:(res)=>{
        this.cars = res
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  report(){
    this.accidentService.create({datum: this.formDatum.controls.datum.value, opis: this.formOpis.controls.opis.value, autoId: this.formAutoId.controls.autoId.value, sleperId: -1, status: 2}).subscribe({
        next:(res)=>{
          this.toast.success({detail: "SUCCESS", summary: "Uspesna prijava nesrece!", duration: 5000});
        }, error:(err)=>{

        }
    })
  }  

}
