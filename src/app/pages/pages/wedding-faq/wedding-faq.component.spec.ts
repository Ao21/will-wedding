import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingFaqComponent } from './wedding-faq.component';

describe('WeddingFaqComponent', () => {
  let component: WeddingFaqComponent;
  let fixture: ComponentFixture<WeddingFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
