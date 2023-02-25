import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { PrikazKorisnikovihNesrecaComponent } from './prikaz-korisnikovih-nesreca.component';
import { NesrecaModule } from './nesreca/nesreca.module';

@NgModule({
  declarations: [PrikazKorisnikovihNesrecaComponent],
  imports: [CommonModule, MaterialModule, NesrecaModule],
  exports: [PrikazKorisnikovihNesrecaComponent],
})
export class PrikazKorisnikovihNesrecaModule {}