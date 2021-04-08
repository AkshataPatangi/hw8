import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTopratedComponent } from './carousel-toprated.component';

describe('CarouselTopratedComponent', () => {
  let component: CarouselTopratedComponent;
  let fixture: ComponentFixture<CarouselTopratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTopratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTopratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
