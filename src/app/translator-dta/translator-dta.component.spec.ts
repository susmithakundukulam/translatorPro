import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorDtaComponent } from './translator-dta.component';

describe('TranslatorDtaComponent', () => {
  let component: TranslatorDtaComponent;
  let fixture: ComponentFixture<TranslatorDtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorDtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorDtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
