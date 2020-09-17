import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialComponent } from './special.component';
import { Special1Component } from './special1/special1.component';
import { Special2Component } from './special2/special2.component';
import { Special3Component } from './special3/special3.component';
import { Special4Component } from './special4/special4.component';
import { Special5Component } from './special5/special5.component';
import { Special6Component } from './special6/special6.component';


const routes: Routes = [
  {
    path:'',
    component:SpecialComponent
  },
  {
    path:'index/women-dress',
    component:Special1Component
  },
  {
    path:'index/kids-dress',
    component:Special2Component
  },
  {
    path:'index/toys',
    component:Special3Component
  },
  {
    path:'index/accessories',
    component:Special4Component
  },
  {
    path:'index/laptop',
    component:Special5Component
  },
  {
    path:'index/egg-boiler',
    component:Special6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
