import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorDashboardComponent } from './contractor-dashboard/contractor-dashboard.component';
import { DivisionDashboardComponent } from './division-dashboard/division-dashboard.component';
import { KpiHomeComponent } from './overall-dashboard/kpi-home/kpi-home.component';
import { KpiTwoComponent } from './overall-dashboard/kpi-two/kpi-two.component';
import { OverallDashboardHomeComponent } from './overall-dashboard/overall-dashboard-home/overall-dashboard-home.component';
import { OverallDashboardMapComponent } from './overall-dashboard/overall-dashboard-map/overall-dashboard-map.component';
import { OverallDashboardComponent } from './overall-dashboard/overall-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { PwrdDashboardComponent } from './pwrd-dashboard/pwrd-dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  {
    path: 'project-dashboard',
    component: ProjectDashboardComponent
  },
  {
    path: 'division-dashboard',
    component: DivisionDashboardComponent
  },
  {
    path: '',
    component: OverallDashboardComponent,
    children: [
      {
        path: 'home',
        component: OverallDashboardHomeComponent
      },
      {
        path: 'kpi-2',
        component: KpiTwoComponent
      },
      {
        path: 'kpi-home',
        component: KpiHomeComponent
      },
      {
        path: 'map-view',
        component: OverallDashboardMapComponent
      }
    ]
  },
  {
    path: 'overview-dashboard',
    component: PwrdDashboardComponent
  },
  // {
  //   path: 'pwrd-dashboard',
  //   component: PwrdDashboardComponent
  // },
  {
    path: 'contractor-dashboard',
    component: ContractorDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
