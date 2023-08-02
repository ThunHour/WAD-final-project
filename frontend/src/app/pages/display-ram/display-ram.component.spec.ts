import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRamComponent } from './display-ram.component';

describe('DisplayRamComponent', () => {
  let component: DisplayRamComponent;
  let fixture: ComponentFixture<DisplayRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
