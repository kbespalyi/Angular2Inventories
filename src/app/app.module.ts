import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { ContactsModule } from './contacts/contacts.module';
import { CustomServicesModule } from './cms/custom-services.module';
import { AboutModule } from './about/about.module';

import { UserService } from './shared/services/user.service';

import { ConfigService } from './shared/services/config.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ContactsModule,
    CustomServicesModule,
    AboutModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    LocalStorageService,
    UserService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
