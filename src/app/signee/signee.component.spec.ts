import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneeComponent } from './signee.component';

describe('SigneeComponent', () => {
  let component: SigneeComponent;
  let fixture: ComponentFixture<SigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
