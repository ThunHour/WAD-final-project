import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCaseComponent } from './display-case.component';

describe('DisplayCaseComponent', () => {
  let component: DisplayCaseComponent;
  let fixture: ComponentFixture<DisplayCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
