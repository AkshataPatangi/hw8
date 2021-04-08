import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTopratedTvComponent } from './carousel-toprated-tv.component';

describe('CarouselTopratedTvComponent', () => {
  let component: CarouselTopratedTvComponent;
  let fixture: ComponentFixture<CarouselTopratedTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTopratedTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTopratedTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
