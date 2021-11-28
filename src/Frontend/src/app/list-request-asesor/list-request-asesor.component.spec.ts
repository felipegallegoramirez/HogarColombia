import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestAsesorComponent } from './list-request-asesor.component';

describe('ListRequestAsesorComponent', () => {
  let component: ListRequestAsesorComponent;
  let fixture: ComponentFixture<ListRequestAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRequestAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
