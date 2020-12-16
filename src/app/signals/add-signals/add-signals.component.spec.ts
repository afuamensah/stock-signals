import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSignalsComponent } from './add-signals.component';

describe('AddSignalsComponent', () => {
  let component: AddSignalsComponent;
  let fixture: ComponentFixture<AddSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSignalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
