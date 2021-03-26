import {Component} from '@angular/core';
import { SearchService } from './search.component.service';
import {Observable} from 'rxjs';
import { distinctUntilChanged,debounceTime ,switchMap} from 'rxjs/operators';

@Component({
  selector: 'ngbd-typeahead-template',
  templateUrl: './search.component.html',
  // styles: [`.formcontrol { width: 300px; }`]
})

export class SearchComponent {
  
constructor(private searchService: SearchService) {}

public model: any;

search = (text$: Observable<string>) =>
  text$.pipe(debounceTime(800),
      distinctUntilChanged(),
    
    switchMap((term: string) => this.searchService.searchEntries(term)))
  
    formatter = (x: {name: string}) => x.name;
}
