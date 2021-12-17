import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarCardComponent } from './chart-bar-card.component';

describe('ChartBarCardComponent', () => {
  let component: ChartBarCardComponent;
  let fixture: ComponentFixture<ChartBarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
