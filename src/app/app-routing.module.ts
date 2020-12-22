import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { SetGetComponent } from './set-get/set-get.component';
import {CourseComponent} from './course/course.component';
import {StudenInfoComponent} from './studen-info/studen-info.component'

const routes: Routes = [
  {path:'setGet',component:SetGetComponent},
  {path:'course',component:CourseComponent},
  {path:'studentInfo',component:StudenInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
