import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MilksRoutingModule} from './milks-routing.module';
import {MilksComponent} from './milks/milks.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MilksComponent
  ],
  imports: [
    CommonModule,
    MilksRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class MilksModule {
}
