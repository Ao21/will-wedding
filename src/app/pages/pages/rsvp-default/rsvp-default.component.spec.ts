import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpDefaultComponent } from './rsvp-default.component';

describe('RsvpDefaultComponent', () => {
  let component: RsvpDefaultComponent;
  let fixture: ComponentFixture<RsvpDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
