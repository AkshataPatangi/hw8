import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPopularTvComponent } from './carousel-popular-tv.component';

describe('CarouselPopularTvComponent', () => {
  let component: CarouselPopularTvComponent;
  let fixture: ComponentFixture<CarouselPopularTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPopularTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPopularTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
