import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFirstComponent } from './mobile-first.component';

describe('MobileFirstComponent', () => {
  let component: MobileFirstComponent;
  let fixture: ComponentFixture<MobileFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
