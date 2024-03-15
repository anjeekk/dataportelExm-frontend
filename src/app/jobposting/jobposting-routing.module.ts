import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobpostingComponent } from './jobposting.component';
import { NewjobComponent } from './newjob/newjob.component';

const routes: Routes = [
  {
    path:'joblist',
    component:JobpostingComponent
  },
  {
    path:'newjob',
   component:NewjobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobpostingRoutingModule { }
