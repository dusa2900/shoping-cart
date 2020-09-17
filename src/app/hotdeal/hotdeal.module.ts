import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotdealRoutingModule } from './hotdeal-routing.module';
import { HotdealComponent } from './hotdeal.component';
import { Hot1Component } from './hot1/hot1.component';
import { Hot2Component } from './hot2/hot2.component';
import { Hot3Component } from './hot3/hot3.component';
import { Hot4Component } from './hot4/hot4.component';
import { Ho5Component } from './ho5/ho5.component';


@NgModule({
  declarations: [HotdealComponent, Hot1Component, Hot2Component, Hot3Component, Hot4Component, Ho5Component],
  imports: [
    CommonModule,
    HotdealRoutingModule
  ],
  exports:[HotdealComponent]
})
export class HotdealModule { }
