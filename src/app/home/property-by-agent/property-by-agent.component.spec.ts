import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyByAgentComponent } from './property-by-agent.component';

describe('PropertyByAgentComponent', () => {
  let component: PropertyByAgentComponent;
  let fixture: ComponentFixture<PropertyByAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyByAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
