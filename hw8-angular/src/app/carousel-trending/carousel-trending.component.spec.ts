import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTrendingComponent } from './carousel-trending.component';

describe('CarouselTrendingComponent', () => {
  let component: CarouselTrendingComponent;
  let fixture: ComponentFixture<CarouselTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
