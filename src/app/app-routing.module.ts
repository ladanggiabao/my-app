import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./modules/non-security/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/non-security/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/security/authentication/authentication.module').then(m => m.AuthenticationModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
