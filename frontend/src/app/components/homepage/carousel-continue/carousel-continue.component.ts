import { Component, OnInit } from '@angular/core';
import { CarouselContinueService } from './carousel-continue.component.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-carousel-continue',
  templateUrl: './carousel-continue.component.html',
  styleUrls: ['./carousel-continue.component.css']
})
export class CarouselContinueComponent implements OnInit {
  
  results:any
  tempresults:any;
  carouselid = "carouselcontinue";
  mobileresults:any;
  mobile=false;
  constructor(private service:CarouselContinueService,public bo: BreakpointObserver) {}
    ngOnInit() {
      this.service.MylistDetails().subscribe(response => {
        this.tempresults = response;
        var results = new Array()
        var arr = new Array()
        var mobileresults = new Array()
        for(var i=0;i<this.tempresults.length;i++){
            var data ={}
            data['id'] = this.tempresults[i]['id']
            data['name'] = this.tempresults[i]['name']
            data['media_type'] = this.tempresults[i]['media_type']
            data['poster_path'] = this.tempresults[i]['poster_path']
            arr.push(data)
            mobileresults.push([data])
            if(arr.length == 6){
              results.push(arr)
              arr = new Array()
            }
        }
        if(arr.length>0) results.push(arr)
        this.results = results
        this.mobileresults = mobileresults
        // console.log(this.results)
        this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          this.mobile = true;
          this.results = mobileresults
          console.log('Viewport is Handset',);
        } 
      })
    });
    }
}
