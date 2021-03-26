import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-general',
  templateUrl: './carousel-general.component.html',
  styleUrls: ['./carousel-general.component.css']
})
export class CarouselGeneralComponent implements OnInit {
  @Input() carid: string;
  @Input() imagearray: any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
