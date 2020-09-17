import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotdealComponent } from './hotdeal.component';
import { Hot1Component } from './hot1/hot1.component';
import { Hot2Component } from './hot2/hot2.component';
import { Hot3Component } from './hot3/hot3.component';
import { Hot4Component } from './hot4/hot4.component';
import { Ho5Component } from './ho5/ho5.component';

const routes: Routes = [
  {
    path:'',
    component:HotdealComponent
  },
  {
    path:'index/jewellery',
    component:Hot1Component
  },
  {
    path:'index/shirt',
    component:Hot2Component
  },
  {
    path:'index/helmet',
    component:Hot3Component
  },
  {
    path:'index/camera',
    component:Hot4Component
  },
  {
    path:'index/shoe',
    component:Ho5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotdealRoutingModule { }
