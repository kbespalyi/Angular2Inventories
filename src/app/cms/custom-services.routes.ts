import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomServicesComponent } from './custom-services.component';

import { AuthGuard } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

import { AccountsComponent } from './accounts/accounts.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountSingleComponent } from './accounts/account-single/account-single.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountCreateComponent } from './accounts/account-create/account-create.component';

// Route Configuration
export const customServicesRoutes: Routes = [{
  path: 'admin',
  children: [
    {
      path: '',
      canActivate: [AuthGuard],
      component: CustomServicesComponent,
      children: [
        {
          path: 'users',
          canActivateChild: [AuthGuard],
          component: UsersComponent,
          children: [
            {
              path: '',
              component: UserListComponent
            },
            {
              path: 'create',
              component: UserCreateComponent
            },
            {
              path: ':id',
              component: UserSingleComponent
            },
            {
              path: ':id/edit',
              component: UserEditComponent
            }
          ]
        },
        {
          path: 'accounts',
          canActivateChild: [AuthGuard],
          component: AccountsComponent,
          children: [
            {
              path: '',
              component: AccountListComponent
            },
            {
              path: 'create',
              component: AccountCreateComponent
            },
            {
              path: ':id',
              component: AccountSingleComponent
            },
            {
              path: ':id/edit',
              component: AccountEditComponent
            }
          ]
        }        
      ]
    },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(customServicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomServicesRoutingModule { }
