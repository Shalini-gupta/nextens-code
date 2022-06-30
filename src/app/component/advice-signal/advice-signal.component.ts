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
  clientName: String = ''
  constructor(private store: Store<{advice: Advice}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAdvice());
    this.adviceResult = this.store.select('advice');
    this.adviceResult.subscribe(advice => {
      this.clientName= advice.adviceDetails.ClientName;
      this.adviceList = advice.adviceDetails.AdviceSignals;
    })
  }

  stringToDate(d: string){
    var date = d.split('-');
    return new Date(date[2]+ '-'+date[1]+'-'+date[0])
  }
}
