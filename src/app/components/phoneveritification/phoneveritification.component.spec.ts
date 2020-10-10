import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneveritificationComponent } from './phoneveritification.component';

describe('PhoneveritificationComponent', () => {
  let component: PhoneveritificationComponent;
  let fixture: ComponentFixture<PhoneveritificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneveritificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneveritificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
