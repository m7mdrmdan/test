import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
  {
    path:'one',
    loadChildren: () => import('src/app/one/one.module').then(m => m.OneModule),
  },
  {
    path:'two',
    loadChildren: () => import('src/app/two/two.module').then(m => m.TwoModule),
  },
  {
    path:'portal/one',
    loadChildren: () => import('src/app/one/one.module').then(m => m.OneModule),
  },
  {
    path:'mm',
    loadChildren: () => import('src/app/test/test.module').then(m => m.TestModule),outlet:'redColor'
  },
  {path:'green',component:GreenComponent,outlet:'greenColor'},
  {path:'red',component:RedComponent,outlet:'redColor'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
