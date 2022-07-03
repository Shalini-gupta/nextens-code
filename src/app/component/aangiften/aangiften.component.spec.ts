import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AangiftenComponent } from './aangiften.component';

describe('AangiftenComponent', () => {
  let component: AangiftenComponent;
  let fixture: ComponentFixture<AangiftenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AangiftenComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AangiftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
