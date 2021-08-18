import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProjectsComponent } from './BannerProjects.component';

describe('BannerProjectsComponent', () => {
  let component: BannerProjectsComponent;
  let fixture: ComponentFixture<BannerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
