import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMaintenanceComponent } from './dashboard-maintenance/dashboard-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationMaintenanceRoutingModule { }
