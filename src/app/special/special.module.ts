import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { SpecialComponent } from './special.component';
import { Special1Component } from './special1/special1.component';
import { Special2Component } from './special2/special2.component';
import { Special3Component } from './special3/special3.component';
import { Special4Component } from './special4/special4.component';
import { Special5Component } from './special5/special5.component';
import { Special6Component } from './special6/special6.component';


@NgModule({
  declarations: [SpecialComponent, Special1Component, Special2Component, Special3Component, Special4Component, Special5Component, Special6Component],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ],
  exports:[SpecialComponent]
})
export class SpecialModule { }
