import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  @Input() ytvideoid:any;
 height:any;
 widthyoutube:any;

  constructor(public bo: BreakpointObserver) { }

  ngOnInit(): void {
    this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          this.height = "200";
          this.widthyoutube = '340';
        }
      })
  
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
   
   
  }

}
