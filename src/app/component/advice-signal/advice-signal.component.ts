import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Advice, AdviceSignal } from '../../model/advice.model';

@Component({
  selector: 'app-advice-signal',
  templateUrl: './advice-signal.component.html',
  styleUrls: ['./advice-signal.component.css']
})
export class AdviceSignalComponent implements OnInit {
  advice: Observable<Advice> | undefined;
  adviceSignal: AdviceSignal | undefined;

  constructor(private route: ActivatedRoute, private store: Store<{ advice: Advice }>) { }

  ngOnInit(): void {
    this.advice = this.store.select('advice');
    let adviceSignalId = this.route.snapshot.paramMap.get('adviceSignalId');
    this.advice.subscribe((advice) => {
      this.adviceSignal = advice.adviceSignals?.filter((adviceSignal) => {
        if (adviceSignalId != null) {
          return +adviceSignalId == adviceSignal.id;
        }
        return false;
      })?.[0];
    })
  }

  stringToDate(dateString: string | undefined): Date | undefined {
    if (dateString) {
      var date = dateString.split('-');
      return new Date(date[2] + '-' + date[1] + '-' + date[0])
    } else {
      return;
    }
  }
}
