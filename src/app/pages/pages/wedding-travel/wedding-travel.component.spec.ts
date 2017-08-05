import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingTravelComponent } from './wedding-travel.component';

describe('WeddingTravelComponent', () => {
  let component: WeddingTravelComponent;
  let fixture: ComponentFixture<WeddingTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
