import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAdvice } from '../../store/advice/advice.action';
import { Advice } from '../../model/advice.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adviceResult: Observable<any> | undefined;
  adviceList: any[] = []
  filterAdviceList: any = [];
  yearList : String[] = [];
  yearUniqueList: String[] = [];
  showYear: String = '';
    
  constructor(private store: Store<{advice: Advice}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAdvice());
    this.adviceResult = this.store.select('advice');
    this.adviceResult.subscribe(res => {
      this.adviceList = res.adviceDetails.AdviceSignals;
      this.adviceList.map((val:any) => {
        this.yearList.push(val.CreateDate.split('-')[2]);
        this.yearUniqueList = _.uniq(this.yearList);
        this.showYear = this.yearUniqueList[0];
        this.filterData( this.adviceList, this.yearUniqueList[0]);
      })
    }) 
  }

  filterData(adviceList: any[], recentYear:String){
    this.filterAdviceList = adviceList.filter(val => {
      return recentYear == val.CreateDate.split('-')[2];
    })
  }

  stringToDate(d: string){
    var date = d.split('-');
    return new Date(date[2]+ '-'+date[1]+'-'+date[0])
  }

  onChangeYear(event: any){
    this.showYear = event.target.value
    this.filterAdviceList = this.adviceList.filter(val => {
      return event.target.value == val.CreateDate.split('-')[2];
    })
  }

}
