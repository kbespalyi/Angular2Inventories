import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { WikipediaService, IWikiItem } from '../shared/services/wikipedia.service';

@Component({
  moduleId: module.id,
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [ WikipediaService ]
})

export class WikiSmartComponent implements OnInit {

  items: Observable<IWikiItem[]>;

  private searchTermStream = new Subject<string>();

  constructor (private wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }
}