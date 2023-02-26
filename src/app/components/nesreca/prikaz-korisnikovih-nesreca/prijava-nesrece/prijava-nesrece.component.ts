import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'prijava-nesrece',
  templateUrl: './prijava-nesrece.component.html',
  styleUrls: ['./prijava-nesrece.component.css']
})
export class PrijavaNesreceComponent implements OnInit {

  cars: any[] = []

  constructor(private carService: CarService){}

  
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

  

}
