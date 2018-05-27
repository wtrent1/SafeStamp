import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmapageComponent } from './pharmapage.component';

describe('PharmapageComponent', () => {
  let component: PharmapageComponent;
  let fixture: ComponentFixture<PharmapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
