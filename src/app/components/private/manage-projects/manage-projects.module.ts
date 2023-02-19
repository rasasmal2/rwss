import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProjectsRoutingModule } from './manage-projects-routing.module';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { MilestoneDetailsComponent } from './milestone-details/milestone-details.component';


@NgModule({
  declarations: [
    ProjectSearchComponent,
    MilestoneDetailsComponent
  ],
  imports: [
    CommonModule,
    ManageProjectsRoutingModule,
    SharedModule
  ]
})
export class ManageProjectsModule { }
