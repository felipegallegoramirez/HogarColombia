import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAsesorComponent } from './date-asesor.component';

describe('DateAsesorComponent', () => {
  let component: DateAsesorComponent;
  let fixture: ComponentFixture<DateAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
