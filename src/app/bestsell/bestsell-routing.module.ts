import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Best1Component } from './best1/best1.component';
import { BestsellComponent } from './bestsell.component';
import { Best2Component } from './best2/best2.component';
import { Best3Component } from './best3/best3.component';
import { Best4Component } from './best4/best4.component';


const routes: Routes = [
  {
    path:'',
    component:BestsellComponent
  },
  {
    path:'index/best1',
    component:Best1Component
  },
  {
    path:'index/best2',
    component:Best2Component
  },
  {
    path:'index/best3',
    component:Best3Component
  },
  {
    path:'index/best4',
    component:Best4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestsellRoutingModule { }
