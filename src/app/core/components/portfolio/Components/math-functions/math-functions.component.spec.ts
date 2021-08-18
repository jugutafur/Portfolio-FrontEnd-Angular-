import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathFunctionsComponent } from './math-functions.component';

describe('MathFunctionsComponent', () => {
  let component: MathFunctionsComponent;
  let fixture: ComponentFixture<MathFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
