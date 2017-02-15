import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../shared/services/user.service';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

import { CustomServicesComponent } from './custom-services.component';
import { CustomServicesRoutingModule } from './custom-services.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomServicesRoutingModule
  ],
  declarations: [
    CustomServicesComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  providers: [ UserService ]
})

export class CustomServicesModule {}
