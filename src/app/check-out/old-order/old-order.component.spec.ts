import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldOrderComponent } from './old-order.component';

describe('OldOrderComponent', () => {
  let component: OldOrderComponent;
  let fixture: ComponentFixture<OldOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
