import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMotherBoardComponent } from './display-mother-board.component';

describe('DisplayMotherBoardComponent', () => {
  let component: DisplayMotherBoardComponent;
  let fixture: ComponentFixture<DisplayMotherBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMotherBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMotherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
