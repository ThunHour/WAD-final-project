import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCPUComponent } from './display-cpu.component';

describe('DisplayCPUComponent', () => {
  let component: DisplayCPUComponent;
  let fixture: ComponentFixture<DisplayCPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCPUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
