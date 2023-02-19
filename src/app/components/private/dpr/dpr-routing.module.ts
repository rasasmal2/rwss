import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDprComponent } from './create-dpr/create-dpr.component';
import { ProjectSubmitComponent } from './create-dpr/project-submit/project-submit.component';

const routes: Routes = [
  {
    path: 'create-project',
    component: CreateDprComponent
  },
  {
    path: 'project-submit',
    component: ProjectSubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DprRoutingModule { }
