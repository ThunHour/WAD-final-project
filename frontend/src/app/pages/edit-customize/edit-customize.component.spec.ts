import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomizeComponent } from './edit-customize.component';

describe('EditCustomizeComponent', () => {
  let component: EditCustomizeComponent;
  let fixture: ComponentFixture<EditCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
