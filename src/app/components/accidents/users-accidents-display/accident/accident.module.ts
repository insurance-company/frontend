import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AccidentComponent } from './accident.component';

@NgModule({
  declarations: [AccidentComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AccidentComponent],
})
export class AccidentModule {}