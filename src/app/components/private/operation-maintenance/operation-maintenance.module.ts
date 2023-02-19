import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationMaintenanceRoutingModule } from './operation-maintenance-routing.module';
import { DashboardMaintenanceComponent } from './dashboard-maintenance/dashboard-maintenance.component';
import { SharedModule } from '../../../modules/shared/shared.module';


@NgModule({
  declarations: [
    DashboardMaintenanceComponent
  ],
  imports: [
    CommonModule,
    OperationMaintenanceRoutingModule,
    SharedModule
  ]
})
export class OperationMaintenanceModule { }
