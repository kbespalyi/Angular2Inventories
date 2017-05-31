import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { ComposeMessageComponent } from './compose-message.component';
import { AboutRoutingModule } from './about.routes';

import { BoxComponent } from './box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AboutComponent,
    ComposeMessageComponent,
    BoxComponent
  ],
  providers: []
})

export class AboutModule {}
