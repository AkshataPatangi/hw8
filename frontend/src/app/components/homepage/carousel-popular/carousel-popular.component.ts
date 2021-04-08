import { Component } from '@angular/core';
import {CarouselPopularService} from './carousel-popular.component.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-carousel-popular',
  templateUrl: './carousel-popular.component.html',
  styleUrls: [ './carousel-popular.component.css' ]
})
export class CarouselPopularComponent {
  results: any;
  mobileresults:any;
  carouselid = "carousel2";
  mediatype = "movie";
  constructor(private service:CarouselPopularService,public bo: BreakpointObserver) {}
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