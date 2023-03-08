import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AccidentModule } from './accident/accident.module';
import { AccidentValidationComponent } from './accident-validation.component';

@NgModule({
  declarations: [AccidentValidationComponent],
  imports: [CommonModule, MaterialModule, AccidentModule],
  exports: [AccidentValidationComponent],
})
export class AccidentValidationModule {}