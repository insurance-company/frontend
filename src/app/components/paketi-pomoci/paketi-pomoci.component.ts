import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PaketPomociService } from 'src/app/services/paket-pomoci.service';

@Component({
  selector: 'paketi-pomoci',
  templateUrl: './paketi-pomoci.component.html',
  styleUrls: ['./paketi-pomoci.component.css']
})
export class PaketiPomociComponent implements OnInit {

  paketiPomoci = new MatTableDataSource<any>();
  displayedColumns: string[] = ["tip", "cena", "pokrice", "trajanjeUMesecima"]

  constructor(private paketPomociService: PaketPomociService){}


  ngOnInit(): void {
   this.paketPomociService.getAll().subscribe(res=>{
    this.paketiPomoci = res
   })
  }

}
