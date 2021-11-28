import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateofertComponent } from './createofert.component';

describe('CreateofertComponent', () => {
  let component: CreateofertComponent;
  let fixture: ComponentFixture<CreateofertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateofertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateofertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
