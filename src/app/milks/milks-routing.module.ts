import { MilkFormComponent } from './milk-form/milk-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MilksComponent} from "./milks/milks.component";

const routes: Routes = [
  {path:'',component: MilksComponent},
  {path:'new',component: MilkFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilksRoutingModule { }
