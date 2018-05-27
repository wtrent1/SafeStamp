import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowpageComponent } from './howpage.component';

describe('HowpageComponent', () => {
  let component: HowpageComponent;
  let fixture: ComponentFixture<HowpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
