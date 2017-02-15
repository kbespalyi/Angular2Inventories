import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { ComposeMessageComponent } from './compose-message.component';
import { AboutRoutingModule } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    ComposeMessageComponent
  ],
  providers: []
})

export class AboutModule {}
