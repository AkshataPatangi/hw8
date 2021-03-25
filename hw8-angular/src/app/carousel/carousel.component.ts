import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarouselService } from './carousel.component.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private service:CarouselService) {}
  results: any;
    ngOnInit() {
      this.service.getPosts().subscribe(response => {
        this.results = response;
    });
    }
}
