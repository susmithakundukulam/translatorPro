import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteheaderComponent } from './routeheader.component';

describe('RouteheaderComponent', () => {
  let component: RouteheaderComponent;
  let fixture: ComponentFixture<RouteheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
