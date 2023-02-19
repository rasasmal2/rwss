import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorDashboardComponent } from './contractor-dashboard/contractor-dashboard.component';
import { DivisionDashboardComponent } from './division-dashboard/division-dashboard.component';
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
