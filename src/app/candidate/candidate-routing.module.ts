import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
  {
    path:'newcandidate',
    component:CandidateComponent
  },
  {
    path:'candidatelist',
    component:CandidateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
