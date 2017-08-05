import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingAccomodationComponent } from './wedding-accomodation.component';

describe('WeddingAccomodationComponent', () => {
  let component: WeddingAccomodationComponent;
  let fixture: ComponentFixture<WeddingAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
