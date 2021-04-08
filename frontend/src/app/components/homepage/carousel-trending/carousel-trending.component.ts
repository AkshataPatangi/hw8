import { Component, OnInit } from '@angular/core';
import { CarouselTrendingService } from './carousel-trending.component.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel-trending',
  templateUrl: './carousel-trending.component.html',
  styleUrls: ['./carousel-trending.component.css']
})
export class CarouselTrendingComponent implements OnInit {

  results: any;
  carouselid = "carousel4";
  mediatype = "movie";
  mobileresults:any;
  constructor(private service:CarouselTrendingService,public bo: BreakpointObserver) {}
    ngOnInit() {
      this.service.getPosts().subscribe(response => {
        this.results = response;
      
      this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          var mobileresults = new Array()
          for(var i=0;i<this.results.length;i++){
            for(var j=0;j<this.results[i].length;j++){
              mobileresults.push([this.results[i][j]])
            }
          }
          this.results = mobileresults
          console.log('Viewport is Handset',);
        } else {
          console.log('Viewport is not Handset');
        }
      })
    });
    }
    

}
