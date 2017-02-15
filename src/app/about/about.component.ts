import { Component } from "@angular/core";
import { ComposeMessageComponent } from './compose-message.component';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  title = 'about inserted.';

  constructor() {}

}
