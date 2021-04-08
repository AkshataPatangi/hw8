import { Component, OnInit } from '@angular/core';
import { CarouselPopularTVService } from './carousel-popular-tv.component.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel-popular-tv',
  templateUrl: './carousel-popular-tv.component.html',
  styleUrls: ['./carousel-popular-tv.component.css']
})
export class CarouselPopularTvComponent implements OnInit {

  results: any;
  carouselid = "carousel5";
  mediatype = "tv";
  mobileresults:any;
  constructor(private service:CarouselPopularTVService,public bo: BreakpointObserver) {}
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
