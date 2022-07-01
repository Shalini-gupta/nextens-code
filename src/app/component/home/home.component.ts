import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAdvice } from '../../store/advice/advice.action';
import { Advice, AdviceSignal } from '../../model/advice.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  advice: Observable<Advice> | undefined;
  adviceSignals: AdviceSignal[] = [];
  filteredAdviceSignals: AdviceSignal[] = [];
  yearList: String[] = [];
  yearUniqueList: String[] = [];
  showYear: String = '';

  constructor(private store: Store<{ advice: Advice }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAdvice());

    this.advice = this.store.select('advice');
    this.advice.subscribe((advice) => {
      console.log('subscribed res :: ', advice);
      this.adviceSignals = advice.adviceSignals;
      console.log('advice signals', this.adviceSignals);
      this.adviceSignals?.map(adviceSignal => {
        this.yearList.push(adviceSignal?.createDate.split('-')[2]);
        this.yearUniqueList = _.uniq(this.yearList);
        this.showYear = this.yearUniqueList[0];
        this.filterData(this.adviceSignals, this.yearUniqueList[0]);
      });
    });
  }

  filterData(adviceList: AdviceSignal[], recentYear: String) {
    this.filteredAdviceSignals = adviceList.filter((adviceSignal) => {
      return recentYear == adviceSignal.createDate.split('-')[2];
    });
  }

  stringToDate(d: string) {
    var date = d.split('-');
    return new Date(date[2] + '-' + date[1] + '-' + date[0]);
  }

  onChangeYear(event: any) {
    this.showYear = event.target.value;
    this.filteredAdviceSignals = this.adviceSignals.filter((val) => {
      return event.target.value == val.createDate.split('-')[2];
    });
  }
}
