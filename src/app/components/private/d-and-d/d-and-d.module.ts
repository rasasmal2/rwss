import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAndDRoutingModule } from './d-and-d-routing.module';
import { CreateDAndDComponent } from './create-d-and-d/create-d-and-d.component';
import { SharedModule } from '../../../modules/shared/shared.module';


@NgModule({
  declarations: [
    CreateDAndDComponent
  ],
  imports: [
    CommonModule,
    DAndDRoutingModule,
    SharedModule
  ]
})
export class DAndDModule { }
