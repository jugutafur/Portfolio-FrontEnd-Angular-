import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleyImagesComponent } from './galey-images.component';

describe('GaleyImagesComponent', () => {
  let component: GaleyImagesComponent;
  let fixture: ComponentFixture<GaleyImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleyImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
