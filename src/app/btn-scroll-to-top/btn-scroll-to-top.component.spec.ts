import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScrollToTopComponent } from './btn-scroll-to-top.component';

describe('BtnScrollToTopComponent', () => {
  let component: BtnScrollToTopComponent;
  let fixture: ComponentFixture<BtnScrollToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnScrollToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
