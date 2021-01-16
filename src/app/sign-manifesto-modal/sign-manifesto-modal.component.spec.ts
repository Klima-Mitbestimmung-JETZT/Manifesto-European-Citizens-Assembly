import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignManifestoModalComponent } from './sign-manifesto-modal.component';

describe('SignManifestoModalComponent', () => {
  let component: SignManifestoModalComponent;
  let fixture: ComponentFixture<SignManifestoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignManifestoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignManifestoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
