import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpAftersComponent } from './rsvp-afters.component';

describe('RsvpAftersComponent', () => {
  let component: RsvpAftersComponent;
  let fixture: ComponentFixture<RsvpAftersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpAftersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpAftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
