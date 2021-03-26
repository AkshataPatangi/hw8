import { Component } from '@angular/core';
import {CarouselTrendingService} from './carousel-trending.component.service'
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-carousel-trending',
  templateUrl: './carousel-trending.component.html',
  styleUrls: [ './carousel-trending.component.css' ]
})
export class CarouselTrendingComponent {
  results: any;
  carouselid = "carousel2";
  constructor(private service:CarouselTrendingService) {}
    ngOnInit() {
      this.service.getPosts().subscribe(response => {
        this.results = response;
        console.log(this.results)
    });
    }
   
}