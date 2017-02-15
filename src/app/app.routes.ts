import { NgModule } from '@angular/core';
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';

import { homeRoutes } from './home/index';

// Route Configuration
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  ...homeRoutes,
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
