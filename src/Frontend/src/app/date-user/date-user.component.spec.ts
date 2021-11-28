import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUserComponent } from './date-user.component';

describe('DateUserComponent', () => {
  let component: DateUserComponent;
  let fixture: ComponentFixture<DateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
