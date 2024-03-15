import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobpostingRoutingModule } from './jobposting-routing.module';
import { JobpostingComponent } from './jobposting.component';
import { NewjobComponent } from './newjob/newjob.component';


@NgModule({
  declarations: [
    JobpostingComponent,
    NewjobComponent
  ],
  imports: [
    CommonModule,
    JobpostingRoutingModule
  ]
})
export class JobpostingModule { }
