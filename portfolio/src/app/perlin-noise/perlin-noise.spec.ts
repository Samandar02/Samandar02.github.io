import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlinNoise } from './perlin-noise';

describe('PerlinNoise', () => {
  let component: PerlinNoise;
  let fixture: ComponentFixture<PerlinNoise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerlinNoise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerlinNoise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
