import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticationdetailsComponent } from './noticationdetails.component';

describe('NoticationdetailsComponent', () => {
  let component: NoticationdetailsComponent;
  let fixture: ComponentFixture<NoticationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
