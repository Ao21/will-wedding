/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChandelierComponent } from './chandelier.component';

describe('ChandelierComponent', () => {
  let component: ChandelierComponent;
  let fixture: ComponentFixture<ChandelierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChandelierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
