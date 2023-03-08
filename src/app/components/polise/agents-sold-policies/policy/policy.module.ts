import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { PolicyComponent} from './policy.component';

@NgModule({
  declarations: [PolicyComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PolicyComponent],
})
export class PolicyModule {}