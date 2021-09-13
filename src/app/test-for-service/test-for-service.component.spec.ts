import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForServiceComponent } from './test-for-service.component';

describe('TestForServiceComponent', () => {
  let component: TestForServiceComponent;
  let fixture: ComponentFixture<TestForServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestForServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
