import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MilksRoutingModule} from './milks-routing.module';
import {MilksComponent} from './milks/milks.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    MilksComponent
  ],
  imports: [
    CommonModule,
    MilksRoutingModule,
    MatTableModule
  ]
})
export class MilksModule {
}
