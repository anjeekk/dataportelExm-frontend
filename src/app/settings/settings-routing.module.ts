import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeComponent } from './customize/customize.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path:'profile',
    component:SettingsComponent

  },
  {
  path:'customize',
  component:CustomizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
