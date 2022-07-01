import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from '../model/advice.model';
import { AdviceMapper } from '../model/advice.mapper';
import { AdviceData } from '../model/advice.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private http: HttpClient) {}

  getAllAdvices(): Observable<Advice> {
    return this.http
      .get<AdviceData>('../assets/advicelist.json')
      .pipe(map(AdviceMapper.fromData));
  }
}
