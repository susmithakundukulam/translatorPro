import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForService1Component } from './test-for-service1.component';

describe('TestForService1Component', () => {
  let component: TestForService1Component;
  let fixture: ComponentFixture<TestForService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestForService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
