import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceberichtenComponent } from './serviceberichten.component';

describe('ServiceberichtenComponent', () => {
  let component: ServiceberichtenComponent;
  let fixture: ComponentFixture<ServiceberichtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceberichtenComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceberichtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
