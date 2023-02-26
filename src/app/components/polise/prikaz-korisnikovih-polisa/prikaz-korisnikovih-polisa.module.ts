import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { PrikazKorisnikovihPolisaComponent } from './prikaz-korisnikovih-polisa.component';
import { PolisaModule } from './polisa/polisa.module';

@NgModule({
  declarations: [PrikazKorisnikovihPolisaComponent],
  imports: [CommonModule, MaterialModule, PolisaModule],
  exports: [PrikazKorisnikovihPolisaComponent],
})
export class PrikazKorisnikovihPolisaModule {}