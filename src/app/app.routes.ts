import { NgModule } from '@angular/core';
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

import { AboutRoutingModule } from './about/index';
import { ContactsRoutingModule } from './contacts/index';
import { CustomServicesRoutingModule } from './cms/index';

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
  {
    path: 'wiki',
    component: WikiSmartComponent
  },
  ...homeRoutes,
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AboutRoutingModule,
    ContactsRoutingModule,
    CustomServicesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
