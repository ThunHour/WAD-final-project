import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGPUComponent } from './display-gpu.component';

describe('DisplayGPUComponent', () => {
  let component: DisplayGPUComponent;
  let fixture: ComponentFixture<DisplayGPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGPUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
