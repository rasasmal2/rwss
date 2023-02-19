import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContractorDashboardComponent } from './contractor-dashboard/contractor-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { DivisionDashboardComponent } from './division-dashboard/division-dashboard.component';
import { PwrdDashboardComponent } from './pwrd-dashboard/pwrd-dashboard.component';
import { ContractorDashboardDetailsComponent } from './contractor-dashboard/contractor-dashboard-details/contractor-dashboard-details.component';
import { ProjectDashboardDetailsComponent } from './project-dashboard/project-dashboard-details/project-dashboard-details.component';

import { SharedModule } from '../../../modules/shared/shared.module';

@NgModule({
  declarations: [
    ContractorDashboardComponent,
    ProjectDashboardComponent,
    DivisionDashboardComponent,
    PwrdDashboardComponent,
    ContractorDashboardDetailsComponent,
    ProjectDashboardDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts')
    // }),
  ]
})
export class DashboardModule { }
