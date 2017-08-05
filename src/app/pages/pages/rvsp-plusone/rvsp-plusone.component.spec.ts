import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvspPlusoneComponent } from './rvsp-plusone.component';

describe('RvspPlusoneComponent', () => {
  let component: RvspPlusoneComponent;
  let fixture: ComponentFixture<RvspPlusoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvspPlusoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvspPlusoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
