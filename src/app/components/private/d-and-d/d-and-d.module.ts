import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAndDRoutingModule } from './d-and-d-routing.module';
import { CreateDAndDComponent } from './create-d-and-d/create-d-and-d.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { DAndDSummaryComponent } from './d-and-d-summary/d-and-d-summary.component';
import { DAndDSubmitComponent } from './d-and-d-submit/d-and-d-submit.component';
import { DAndDApprovalComponent } from './d-and-d-approval/d-and-d-approval.component';
import { ApprovalDetailsComponent } from './d-and-d-approval/approval-details/approval-details.component';


@NgModule({
  declarations: [
    CreateDAndDComponent,
    DAndDSummaryComponent,
    DAndDSubmitComponent,
    DAndDApprovalComponent,
    ApprovalDetailsComponent
  ],
  imports: [
    CommonModule,
    DAndDRoutingModule,
    SharedModule
  ]
})
export class DAndDModule { }
