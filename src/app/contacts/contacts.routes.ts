import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

import { ContactsComponent } from './contacts.component';
import { ContactsDetailComponent } from './contacts-detail.component';

// Route Configuration
export const contactsRoutes: Routes = [{
  path: 'contacts',
  children: [
    {
      path: '',
      canActivate: [AuthGuard],
      component: ContactsComponent,
      children: [
        {
          path: 'contact/:id',
          canActivateChild: [AuthGuard],
          component: ContactsDetailComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(contactsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactsRoutingModule { }
