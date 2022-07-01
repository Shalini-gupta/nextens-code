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
  adviceResult: Observable<any> | undefined;
  adviceList: any[]= []
  clientName: string = ''
  createDate: string = ''
  constructor(private store: Store<{advice: Advice}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAdvice());
    this.adviceResult = this.store.select('advice');
    this.adviceResult.subscribe(advice => {
      this.clientName= advice.adviceDetails.ClientName;
      this.adviceList = advice.adviceDetails.AdviceSignals;
      this.createDate = this.adviceList[2]?.CreateDate.split('-').reverse().join('-')
    })
  }
}
