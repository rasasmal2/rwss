import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDAndDComponent } from './create-d-and-d/create-d-and-d.component';
import { DAndDApprovalComponent } from './d-and-d-approval/d-and-d-approval.component';
import { DAndDSubmitComponent } from './d-and-d-submit/d-and-d-submit.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateDAndDComponent
  },
  {
    path: 'submit',
    component: DAndDSubmitComponent
  },
  {
    path: 'dd-approval',
    component: DAndDApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DAndDRoutingModule { }
