import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { InneroneComponent } from './innerone/innerone.component';
import { InnerTwoComponent } from './inner-two/inner-two.component';

const routes: Routes = [
  {
    path: '',
    component:OneComponent ,
    children: [

      { path: 'inner',component:InneroneComponent },
      { path: 'innerTwo',component:InnerTwoComponent },
      {
        path:'two',
        loadChildren: () => import('src/app/two/two.module').then(m => m.TwoModule),
      },
      {
        path:'kk',
        loadChildren: () => import('src/app/test/test.module').then(m => m.TestModule),
      }
     ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
