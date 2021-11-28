import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewofertComponent } from './previewofert.component';

describe('PreviewofertComponent', () => {
  let component: PreviewofertComponent;
  let fixture: ComponentFixture<PreviewofertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewofertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewofertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
