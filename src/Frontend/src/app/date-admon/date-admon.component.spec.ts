import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAdmonComponent } from './date-admon.component';

describe('DateAdmonComponent', () => {
  let component: DateAdmonComponent;
  let fixture: ComponentFixture<DateAdmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAdmonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
