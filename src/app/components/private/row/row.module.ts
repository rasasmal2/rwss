import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowRoutingModule } from './row-routing.module';
import { RowCreateComponent } from './row-create/row-create.component';
import { SharedModule } from '../../../modules/shared/shared.module';


@NgModule({
  declarations: [
    RowCreateComponent
  ],
  imports: [
    CommonModule,
    RowRoutingModule,
    SharedModule
  ]
})
export class RowModule { }
