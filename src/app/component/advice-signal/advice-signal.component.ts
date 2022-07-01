import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAdvice } from '../../store/advice/advice.action';
import { Advice } from '../../model/advice.model';

@Component({
  selector: 'app-advice-signal',
  templateUrl: './advice-signal.component.html',
  styleUrls: ['./advice-signal.component.css']
})
export class AdviceSignalComponent implements OnInit {
  advice: Observable<Advice> | undefined;
  clientName: String = ''
  constructor(private store: Store<{advice: Advice}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAdvice());
    this.advice = this.store.select('advice');
  }

  stringToDate(d: string){
    var date = d.split('-');
    return new Date(date[2]+ '-'+date[1]+'-'+date[0])
  }
}
