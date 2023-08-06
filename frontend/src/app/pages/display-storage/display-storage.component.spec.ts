import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStorageComponent } from './display-storage.component';

describe('DisplayStorageComponent', () => {
  let component: DisplayStorageComponent;
  let fixture: ComponentFixture<DisplayStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
