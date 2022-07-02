import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { AdviceSignalComponent } from './advice-signal.component';

describe('AdviceSignalComponent', () => {
  let component: AdviceSignalComponent;
  let fixture: ComponentFixture<AdviceSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        TranslateModule.forRoot({}),
      ],
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
