import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowRoutingModule } from './row-routing.module';
import { RowCreateComponent } from './row-create/row-create.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { RowSummaryComponent } from './row-summary/row-summary.component';


@NgModule({
  declarations: [
    RowCreateComponent,
    RowSummaryComponent
  ],
  imports: [
    CommonModule,
    RowRoutingModule,
    SharedModule
  ]
})
export class RowModule { }
