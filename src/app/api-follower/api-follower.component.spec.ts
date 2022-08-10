import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFollowerComponent } from './api-follower.component';

describe('ApiFollowerComponent', () => {
  let component: ApiFollowerComponent;
  let fixture: ComponentFixture<ApiFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
