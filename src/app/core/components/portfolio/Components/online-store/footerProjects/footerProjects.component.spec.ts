import { ComponentFixture, TestBed } from '@angular/core/testing';

import { footerProjectsComponent } from './footerProjects.component';

describe('footerProjectsComponent', () => {
  let component: footerProjectsComponent;
  let fixture: ComponentFixture<footerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ footerProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(footerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
