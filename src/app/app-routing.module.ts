import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnrolleesComponent} from './component/enrollees/enrollees.component';
import {EnrolleeComponent} from './component/enrollee/enrollee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/enrollees',
    pathMatch: 'full'
  },
  {
    path: 'enrollees',
    component: EnrolleesComponent
  },
  {
    path: 'enrollee/:id',
    component: EnrolleeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
