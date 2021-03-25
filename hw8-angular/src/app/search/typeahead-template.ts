import {Component} from '@angular/core';
import { SearchService } from './typeahead-template.service';
import {Observable, of, Subject,OperatorFunction} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'ngbd-typeahead-template',
  templateUrl: './typeahead-template.html',
  // styles: [`.formcontrol { width: 300px; }`]
})

export class NgbdTypeaheadTemplate {
  
constructor(private searchService: SearchService) {}

public model: any;

search = (text$: Observable<string>) =>
  text$.
    debounceTime(200).
    distinctUntilChanged().
    switchMap((term: string) => this.searchService.searchEntries(term))
  
    formatter = (x: {name: string}) => x.name;
}
