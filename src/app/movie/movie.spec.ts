import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie } from './movie';

describe('Movie', () => {
  let component: Movie;
  let fixture: ComponentFixture<Movie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
