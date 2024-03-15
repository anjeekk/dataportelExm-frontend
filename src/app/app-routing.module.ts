import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisaterComponent } from './regisater/regisater.component';


import { SettingsComponent } from './settings/settings.component';
import { SettingsModule } from './settings/settings.module';


const routes: Routes = [

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',component:RegisaterComponent
  },
  {
    path:'forget', component:ForgetComponent
  },
  
  
  {
    path:'home',
    component:HomeComponent,
    children:[  

     {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
    path:'jobposting',
    loadChildren:()=> import('./jobposting/jobposting.module').then(m=>m.JobpostingModule)
    },

    {
    path:'vendor',
    loadChildren:()=>import('./vendor/vendor.module').then(m=>m.VendorModule)
     },

    {
  path:'client',
  loadChildren:()=> import('./client/client.module').then(m=>m.ClientModule)
    },
    {
  path:'candidate',
  loadChildren:()=> import('./candidate/candidate.module').then(m=>m.CandidateModule)
    },

 
      {
    path:'settings',
    loadChildren:()=>import('./settings/settings.module').then(m=>SettingsModule)
      },
   
        ]
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
