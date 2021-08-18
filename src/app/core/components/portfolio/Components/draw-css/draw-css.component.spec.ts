import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCssComponent } from './draw-css.component';

describe('DrawCssComponent', () => {
  let component: DrawCssComponent;
  let fixture: ComponentFixture<DrawCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
