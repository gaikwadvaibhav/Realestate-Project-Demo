import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyByLocationComponent } from './property-by-location.component';

describe('PropertyByLocationComponent', () => {
  let component: PropertyByLocationComponent;
  let fixture: ComponentFixture<PropertyByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
