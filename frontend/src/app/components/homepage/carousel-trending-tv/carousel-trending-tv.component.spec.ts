import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTrendingTvComponent } from './carousel-trending-tv.component';

describe('CarouselTrendingTvComponent', () => {
  let component: CarouselTrendingTvComponent;
  let fixture: ComponentFixture<CarouselTrendingTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTrendingTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTrendingTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
