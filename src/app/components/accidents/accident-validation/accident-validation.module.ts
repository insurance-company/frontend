import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AccidentModule } from './accident/accident.module';
import { AccidentValidationComponent } from './accident-validation.component';
import { ValidAccidentDialogComponent } from './valid-accident-dialog/valid-accident-dialog.component';

@NgModule({
  declarations: [AccidentValidationComponent, ValidAccidentDialogComponent],
  imports: [CommonModule, MaterialModule, AccidentModule],
  exports: [AccidentValidationComponent],
})
export class AccidentValidationModule {}