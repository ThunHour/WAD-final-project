import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPowerSupplyComponent } from './display-power-supply.component';

describe('DisplayPowerSupplyComponent', () => {
  let component: DisplayPowerSupplyComponent;
  let fixture: ComponentFixture<DisplayPowerSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPowerSupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPowerSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
