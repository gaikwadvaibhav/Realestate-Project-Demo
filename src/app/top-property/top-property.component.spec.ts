import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPropertyComponent } from './top-property.component';

describe('TopPropertyComponent', () => {
  let component: TopPropertyComponent;
  let fixture: ComponentFixture<TopPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
