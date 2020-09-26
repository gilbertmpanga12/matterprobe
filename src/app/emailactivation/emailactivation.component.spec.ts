import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailactivationComponent } from './emailactivation.component';

describe('EmailactivationComponent', () => {
  let component: EmailactivationComponent;
  let fixture: ComponentFixture<EmailactivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailactivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
