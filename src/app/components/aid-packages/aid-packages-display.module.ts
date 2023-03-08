import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AidPackagesDisplayComponent } from './aid-packages-display.component';
import { BuyAidPackageComponent } from './buy-aid-package/buy-aid-package.component';

@NgModule({
  declarations: [AidPackagesDisplayComponent, BuyAidPackageComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AidPackagesDisplayComponent],
})
export class AidPackagesDisplayModule {}