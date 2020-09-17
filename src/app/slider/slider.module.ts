import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';
import { Slider1Component } from './slider1/slider1.component';
import { Slider2Component } from './slider2/slider2.component';
import { Slider3Component } from './slider3/slider3.component';
import { Slider4Component } from './slider4/slider4.component';



@NgModule({
  declarations: [SliderComponent, Slider1Component, Slider2Component, Slider3Component, Slider4Component],
  imports: [
    CommonModule,
    SliderRoutingModule
  ],
  exports:[SliderComponent]
})
export class SliderModule { }
