import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { UsersPoliciesDisplayComponent } from './users-policies-display.component';
import { PolicyModule} from './policy/policy.module';

@NgModule({
  declarations: [UsersPoliciesDisplayComponent],
  imports: [CommonModule, MaterialModule, PolicyModule],
  exports: [UsersPoliciesDisplayComponent],
})
export class UsersPoliciesDisplayModule {}