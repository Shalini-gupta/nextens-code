import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdviceService } from '../../services/advice.service';
import { Injectable } from '@angular/core';
import { loadAdvice, loadAdviceSuccess } from './advice.action';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AdviceEffects {
  constructor(private actions$: Actions, private adviceService: AdviceService) { }

  loadAdvice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAdvice),
      switchMap(() => this.adviceService.getAllAdvices().pipe(
        map(advice => loadAdviceSuccess({ advice: advice })),
      ))
    )
  );
}