import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedHeroComponent } from './detailed-hero.component';

describe('DetailedHeroComponent', () => {
  let component: DetailedHeroComponent;
  let fixture: ComponentFixture<DetailedHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
