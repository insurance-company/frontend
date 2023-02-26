import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { PolisaComponent } from './polisa.component';

@NgModule({
  declarations: [PolisaComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PolisaComponent],
})
export class PolisaModule {}