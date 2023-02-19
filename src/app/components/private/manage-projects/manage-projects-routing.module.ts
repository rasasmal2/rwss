import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSearchComponent } from './project-search/project-search.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProjectsRoutingModule { }
