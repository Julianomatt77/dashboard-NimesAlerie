import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsViewComponent } from './errors-view.component';

describe('ErrorsViewComponent', () => {
  let component: ErrorsViewComponent;
  let fixture: ComponentFixture<ErrorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
