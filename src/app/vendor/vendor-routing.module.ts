import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { VlisteComponent } from './vliste/vliste.component';
import { VprofileComponent } from './vprofile/vprofile.component';

const routes: Routes = [
  {
    path:'newvendor',
    component:VendorComponent
    
  },
  {
    path:'vendorprofile',
    component:VprofileComponent
  },
  {
    path:'vendorlist',
    component:VlisteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
