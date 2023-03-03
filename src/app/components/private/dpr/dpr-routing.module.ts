import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDprComponent } from './create-dpr/create-dpr.component';
import { ProjectSubmitComponent } from './create-dpr/project-submit/project-submit.component';
import { ProjectApprovalComponent } from './project-approval/project-approval.component';
import { ProjectStatusTrackingComponent } from './project-status-tracking/project-status-tracking.component';

const routes: Routes = [
  {
    path: 'create-project',
    component: CreateDprComponent
  },
  {
    path: 'project-submit',
    component: ProjectSubmitComponent
  },
  {
    path: 'project-approval',
    component: ProjectApprovalComponent
  },
  {
    path: 'project-status-tracking',
    component: ProjectStatusTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DprRoutingModule { }
