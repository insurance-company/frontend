import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AidPackageService } from 'src/app/services/aidPackage.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'export-to-pdf',
  templateUrl: './export-to-pdf.component.html',
  styleUrls: ['./export-to-pdf.component.css']
})
export class ExportToPdfComponent implements OnInit {

  aidPackageId : number = 0
  carId : number = 0
  constructor(private pdfService: PdfService){}

  ngOnInit(): void {}

  GeneratePDF(){
    this.pdfService.generatePolicyPDF(this.aidPackageId, this.carId).subscribe(res=>{
      let blob: Blob = res.body as Blob
      let url = window.URL.createObjectURL(blob)
      window.open(url)
    })
  }
}
