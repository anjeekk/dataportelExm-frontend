import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path:'newclient',
    component:ClientComponent
  },
  {
    path:'clientlist',
    component:ClientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
