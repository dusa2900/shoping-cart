import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestsellRoutingModule } from './bestsell-routing.module';
import { BestsellComponent } from './bestsell.component';
import { Best1Component } from './best1/best1.component';
import { Best2Component } from './best2/best2.component';
import { Best3Component } from './best3/best3.component';
import { Best4Component } from './best4/best4.component';


@NgModule({
  declarations: [BestsellComponent, Best1Component, Best2Component, Best3Component, Best4Component],
  imports: [
    CommonModule,
    BestsellRoutingModule
  ],
  exports:[BestsellComponent]
})
export class BestsellModule { }
