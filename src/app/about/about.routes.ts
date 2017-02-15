import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { ComposeMessageComponent } from './compose-message.component';

// Route Configuration
const aboutRoutes: Routes = [{
  path: 'about',
  children: [
    {
      path: '',
      component: AboutComponent
    },
    {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AboutRoutingModule { }
