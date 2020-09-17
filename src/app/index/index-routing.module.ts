import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';


const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'slider',
    loadChildren: () => import('../slider/slider.module').then(m => m.SliderModule)
  },
  {
    path:'bestsell',
    loadChildren: () => import('../bestsell/bestsell.module').then(m => m.BestsellModule)
  },
  {
    path:'hotdeal',
    loadChildren: () => import('../hotdeal/hotdeal.module').then(m => m.HotdealModule)
  },
  {
    path:'special',
    loadChildren: () => import('../special/special.module').then(m => m.SpecialModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
