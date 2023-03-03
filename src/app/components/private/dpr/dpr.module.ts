import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DprRoutingModule } from './dpr-routing.module';
import { CreateDprComponent } from './create-dpr/create-dpr.component';

import { SharedModule } from '../../../modules/shared/shared.module';
import { AddRoadComponent } from './create-dpr/add-road/add-road.component';
import { EditRoadComponent } from './create-dpr/edit-road/edit-road.component';
import { WorkActegoryComponent } from './create-dpr/work-actegory/work-actegory.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { MisDetailsComponent } from './mis-details/mis-details.component';
import { AttachmentDetailsComponent } from './attachment-details/attachment-details.component';
import { CopyDprDialogComponent } from './copy-dpr-dialog/copy-dpr-dialog.component';
import { ProjectSummaryComponent } from './create-dpr/project-summary/project-summary.component';
import { ProjectSubmitComponent } from './create-dpr/project-submit/project-submit.component';
import { ProjectApprovalComponent } from './project-approval/project-approval.component';
import { ProjectApprovalDetailsComponent } from './project-approval/project-approval-details/project-approval-details.component';
import { ProjectStatusTrackingComponent } from './project-status-tracking/project-status-tracking.component';

@NgModule({
  declarations: [
    CreateDprComponent,
    AddRoadComponent,
    EditRoadComponent,
    WorkActegoryComponent,
    ItemDetailsComponent,
    ItemTableComponent,
    MisDetailsComponent,
    AttachmentDetailsComponent,
    CopyDprDialogComponent,
    ProjectSummaryComponent,
    ProjectSubmitComponent,
    ProjectApprovalComponent,
    ProjectApprovalDetailsComponent,
    ProjectStatusTrackingComponent
  ],
  imports: [
    CommonModule,
    DprRoutingModule,
    SharedModule
  ]
})
export class DprModule { }
