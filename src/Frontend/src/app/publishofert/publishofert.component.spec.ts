import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishofertComponent } from './publishofert.component';

describe('PublishofertComponent', () => {
  let component: PublishofertComponent;
  let fixture: ComponentFixture<PublishofertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishofertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishofertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
