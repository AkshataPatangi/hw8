import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel-general',
  templateUrl: './carousel-general.component.html',
  styleUrls: ['./carousel-general.component.css']
})
export class CarouselGeneralComponent implements OnInit {
  @Input() carid: string;
  @Input() mediatype: string;
  @Input() imagearray:any;
  mobile=false;
  constructor(public bo: BreakpointObserver) { 
    
  }

  ngOnInit(): void {
    this.bo.observe([Breakpoints.Handset])
    .subscribe((bs: BreakpointState) => {
      if(bs.matches) {
        this.mobile = true;
      } else {
      }
    })
  }
  

}
