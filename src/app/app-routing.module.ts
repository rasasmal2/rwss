import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'home', component: PublicHomeComponent },
      
      // { path: 'login', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule) },
      // { path: 'register', loadChildren: () => import('../../register/register.module').then(m => m.RegisterModule) },
      // { path: 'forgot-password', loadChildren: () => import('../../forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) },
      // { path: '**', loadChildren: '../not-found/not-found.module#NotFoundModule' }
    ],
    // canActivate: [PublicauthGuard]
  },

  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'welcome', loadChildren: () => import('./components/private/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: '',loadChildren: () => import('./components/private/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'construction',loadChildren: () => import('./components/private/dpr/dpr.module').then(m => m.DprModule) },
      { path: 'master',loadChildren: () => import('./components/private/master/master.module').then(m => m.MasterModule) },
      { path: 'd-and-d',loadChildren: () => import('./components/private/d-and-d/d-and-d.module').then(m => m.DAndDModule) },
      { path: 'manage-projects',loadChildren: () => import('./components/private/manage-projects/manage-projects.module').then(m => m.ManageProjectsModule) },
      { path: 'row',loadChildren: () => import('./components/private/row/row.module').then(m => m.RowModule) },
      { path: 'operation-maintenance',loadChildren: () => import('./components/private/operation-maintenance/operation-maintenance.module').then(m => m.OperationMaintenanceModule) },


      // { path: 'login', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule) },
      // { path: 'register', loadChildren: () => import('../../register/register.module').then(m => m.RegisterModule) },
      // { path: 'forgot-password', loadChildren: () => import('../../forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) },
      // { path: '**', loadChildren: '../not-found/not-found.module#NotFoundModule' }
    ],
    // canActivate: [PublicauthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
