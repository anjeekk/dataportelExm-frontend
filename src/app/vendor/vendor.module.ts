import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { VprofileComponent } from './vprofile/vprofile.component';
import { VlisteComponent } from './vliste/vliste.component';


@NgModule({
  declarations: [
    VendorComponent,
    VprofileComponent,
    VlisteComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
