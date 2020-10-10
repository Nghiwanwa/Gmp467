import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsuccesfullyComponent } from './bookingsuccesfully.component';

describe('BookingsuccesfullyComponent', () => {
  let component: BookingsuccesfullyComponent;
  let fixture: ComponentFixture<BookingsuccesfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsuccesfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsuccesfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
