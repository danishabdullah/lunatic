import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
