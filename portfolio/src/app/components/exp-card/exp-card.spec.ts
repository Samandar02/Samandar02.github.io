import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCard } from './exp-card';

describe('ExpCard', () => {
  let component: ExpCard;
  let fixture: ComponentFixture<ExpCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
