import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider.component';
import { Slider1Component } from './slider1/slider1.component';
import { Slider4Component } from './slider4/slider4.component';
import { Slider3Component } from './slider3/slider3.component';
import { Slider2Component } from './slider2/slider2.component';


const routes: Routes = [
  {
    path:'',
    component:SliderComponent
  },
  {
    path:'index/slider1',
    component:Slider1Component
  },
  {
    path:'index/slider2',
    component:Slider2Component
  },
  {
    path:'index/slider3',
    component:Slider3Component
  },
  {
    path:'index/slider4',
    component:Slider4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
