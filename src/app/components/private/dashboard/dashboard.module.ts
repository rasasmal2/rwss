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
import { ProjectDashboartTableComponent } from './project-dashboard/project-dashboart-table/project-dashboart-table.component';
import { OverallDashboardComponent } from './overall-dashboard/overall-dashboard.component';
import { OverallDashboardHomeComponent } from './overall-dashboard/overall-dashboard-home/overall-dashboard-home.component';
import { OverallDashboardMapComponent } from './overall-dashboard/overall-dashboard-map/overall-dashboard-map.component';
import { OverallDashboardHeaderComponent } from './overall-dashboard/overall-dashboard-header/overall-dashboard-header.component';
import { HomeMapComponent } from './overall-dashboard/overall-dashboard-home/home-map/home-map.component';

@NgModule({
  declarations: [
    ContractorDashboardComponent,
    ProjectDashboardComponent,
    DivisionDashboardComponent,
    PwrdDashboardComponent,
    ContractorDashboardDetailsComponent,
    ProjectDashboardDetailsComponent,
    ProjectDashboartTableComponent,
    OverallDashboardComponent,
    OverallDashboardHomeComponent,
    OverallDashboardMapComponent,
    OverallDashboardHeaderComponent,
    HomeMapComponent
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
