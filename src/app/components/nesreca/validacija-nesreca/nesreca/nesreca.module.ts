import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { NesrecaComponent } from './nesreca.component';

@NgModule({
  declarations: [NesrecaComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NesrecaComponent],
})
export class NesrecaModule {}