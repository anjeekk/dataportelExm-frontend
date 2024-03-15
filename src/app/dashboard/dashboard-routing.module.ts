import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {
    path:'application',
    component:DashboardComponent

  },
  {
    path:'jobs',
    component:JobsComponent
  },
  {
    path:'companies',
    component:CompaniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
