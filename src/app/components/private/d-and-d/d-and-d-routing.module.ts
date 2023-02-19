import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDAndDComponent } from './create-d-and-d/create-d-and-d.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateDAndDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DAndDRoutingModule { }
