import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '',
    component:TwoComponent ,
    children: [
        { path: '', pathMatch: 'full' }
    ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
