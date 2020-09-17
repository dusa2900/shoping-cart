import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from './../slider/slider.module';
import { BrandsModule } from './../brands/brands.module';
import { BestsellModule } from './../bestsell/bestsell.module';
import { HotdealModule } from './../hotdeal/hotdeal.module';
import { SpecialModule } from './../special/special.module';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,SliderModule,BrandsModule,BestsellModule,HotdealModule,SpecialModule,
    IndexRoutingModule
  ],
  exports:[IndexComponent]
})
export class IndexModule { }
