import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService, IWikiItem } from '../shared/services/wikipedia.service';

@Component({
  //selector: 'my-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [ WikipediaService ]
})

export class WikiComponent {

  items: Observable<IWikiItem[]>;

  constructor (
    private wikipediaService: WikipediaService,
    private router: Router
  ) { }

  search(term: string) {
    this.items = this.wikipediaService.search(term)
  }
}