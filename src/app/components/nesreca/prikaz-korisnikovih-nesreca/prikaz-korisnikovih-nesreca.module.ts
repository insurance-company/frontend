import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { PrikazKorisnikovihNesrecaComponent } from './prikaz-korisnikovih-nesreca.component';
import { NesrecaModule } from './nesreca/nesreca.module';
import { PrijavaNesreceComponent } from './prijava-nesrece/prijava-nesrece.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrikazKorisnikovihNesrecaComponent, PrijavaNesreceComponent],
  imports: [CommonModule, MaterialModule, NesrecaModule],
  exports: [PrikazKorisnikovihNesrecaComponent],
})
export class PrikazKorisnikovihNesrecaModule {}