import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AgentSoldPoliciesDisplayComponent } from './agent-sold-display.component';
import { PolicyModule} from './policy/policy.module';

@NgModule({
  declarations: [AgentSoldPoliciesDisplayComponent],
  imports: [CommonModule, MaterialModule, PolicyModule],
  exports: [AgentSoldPoliciesDisplayComponent],
})
export class AgentSoldPoliciesDisplayModule {}