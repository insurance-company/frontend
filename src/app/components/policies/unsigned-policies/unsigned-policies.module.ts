import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { UnsignedPoliciesComponent } from './unsigned-policies.component';
import { PolicyModule} from './policy/policy.module';
import { ExportToPdfComponent } from './export-to-pdf/export-to-pdf.component';

@NgModule({
  declarations: [UnsignedPoliciesComponent, ExportToPdfComponent],
  imports: [CommonModule, MaterialModule, PolicyModule],
  exports: [UnsignedPoliciesComponent],
})
export class UnsignedPoliciesModule {}