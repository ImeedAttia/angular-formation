import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerictiveComponent } from './derictive.component';

describe('DerictiveComponent', () => {
  let component: DerictiveComponent;
  let fixture: ComponentFixture<DerictiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerictiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerictiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
