import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofertComponent } from './viewofert.component';

describe('ViewofertComponent', () => {
  let component: ViewofertComponent;
  let fixture: ComponentFixture<ViewofertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewofertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
