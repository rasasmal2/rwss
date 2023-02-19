import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowCreateComponent } from './row-create/row-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: RowCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowRoutingModule { }
