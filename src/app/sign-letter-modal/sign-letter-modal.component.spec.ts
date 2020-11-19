import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignLetterModalComponent } from './sign-letter-modal.component';

describe('SignLetterModalComponent', () => {
  let component: SignLetterModalComponent;
  let fixture: ComponentFixture<SignLetterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignLetterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignLetterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
