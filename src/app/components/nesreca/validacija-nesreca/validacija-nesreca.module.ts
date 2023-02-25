import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { ValidacijaNesrecaComponent } from './validacija-nesreca.component';
import { NesrecaModule } from './nesreca/nesreca.module';

@NgModule({
  declarations: [ValidacijaNesrecaComponent],
  imports: [CommonModule, MaterialModule, NesrecaModule],
  exports: [ValidacijaNesrecaComponent],
})
export class ValidacijaNesrecaModule {}