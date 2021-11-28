import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisstRequiestUComponent } from './lisst-requiest-u.component';

describe('LisstRequiestUComponent', () => {
  let component: LisstRequiestUComponent;
  let fixture: ComponentFixture<LisstRequiestUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisstRequiestUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisstRequiestUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
