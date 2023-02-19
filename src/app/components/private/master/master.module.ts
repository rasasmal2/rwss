import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { OfficeComponent } from './office/office.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { AddEditOfficeComponent } from './office/add-edit-office/add-edit-office.component';


@NgModule({
  declarations: [
    OfficeComponent,
    AddEditOfficeComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
