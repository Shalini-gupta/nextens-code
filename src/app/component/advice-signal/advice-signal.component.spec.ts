import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceSignalComponent } from './advice-signal.component';

describe('AdviceSignalComponent', () => {
  let component: AdviceSignalComponent;
  let fixture: ComponentFixture<AdviceSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceSignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
