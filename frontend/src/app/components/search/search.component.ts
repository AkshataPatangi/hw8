import {Component} from '@angular/core';
import { SearchService } from './search.component.service';
import {Observable} from 'rxjs';
import { distinctUntilChanged,debounceTime ,switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'ngbd-typeahead-template',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  
constructor(private searchService: SearchService,private router:Router) {}

public model: any;

search = (text$: Observable<string>) =>
  text$.pipe(debounceTime(800),
      distinctUntilChanged(),
    
    switchMap((term: string) => this.searchService.searchEntries(term)))
  
formatter = (x: {name: string}) => x.name;
onSelect($event) {
  $(".navbar-collapse").collapse('hide');
  $event.preventDefault();
  this.model = null;
  var url = '/watch/' + $event.item.media_type +'/'+$event.item.id
  this.router.navigateByUrl(url)
}

}
