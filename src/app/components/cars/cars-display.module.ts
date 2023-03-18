import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { CarsDisplayComponent } from './cars-display.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';

@NgModule({
  declarations: [CarsDisplayComponent, CreateCarComponent, UpdateCarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CarsDisplayComponent],
})
export class CarsDisplayModule {}