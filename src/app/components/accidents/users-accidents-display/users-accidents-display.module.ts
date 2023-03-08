import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AccidentModule } from './accident/accident.module';
import { ReportAccidentComponent } from './report-accident/report-accident.component';
import { UsersAccidentsDisplayComponent } from './users-accidents-display.component';

@NgModule({
  declarations: [UsersAccidentsDisplayComponent, ReportAccidentComponent],
  imports: [CommonModule, MaterialModule, AccidentModule],
  exports: [UsersAccidentsDisplayComponent],
})
export class UsersAccidentsDisplayModule {}