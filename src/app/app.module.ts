import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

import { ContactsModule } from './contacts/index';
import { CustomServicesModule } from './cms/index';
import { AboutModule } from './about/index';
import { ChatModule } from './chat/index';

import { UserService } from './shared/services/user.service';
import { AccountService } from './shared/services/account.service';
import { WebSocketService } from './shared/services/websocket.service';

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
    LoginComponent,
    HomeComponent,
    WikiComponent,
    WikiSmartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ContactsModule,
    CustomServicesModule,
    AboutModule,
    ChatModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ConfigService,
    LocalStorageService,
    WebSocketService,
    UserService,
    AccountService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
