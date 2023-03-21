import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';


import { BranchesDisplayComponent } from './branches-display.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';

@NgModule({
  declarations: [BranchesDisplayComponent, CreateBranchComponent, UpdateBranchComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BranchesDisplayComponent],
})
export class BranchesDisplayModule {}