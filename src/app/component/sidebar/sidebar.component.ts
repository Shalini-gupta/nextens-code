import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Advice } from '../../model/advice.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() numberOfAdvice: Number | undefined;

  advice: Observable<Advice> | undefined;
  constructor(private store: Store<{ advice: Advice }>) { }

  ngOnInit(): void {
    this.advice = this.store.select('advice');
  }

}
