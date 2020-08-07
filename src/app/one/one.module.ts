import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one/one.component';
import { InneroneComponent } from './innerone/innerone.component';
import { InnerTwoComponent } from './inner-two/inner-two.component';

@NgModule({
  declarations: [OneComponent, InneroneComponent, InnerTwoComponent],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
