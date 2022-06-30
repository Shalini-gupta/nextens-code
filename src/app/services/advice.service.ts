import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from '../model/advice.model';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  constructor(private http: HttpClient) { }

  getAllAdvices() :Observable<Advice> {    
    return this.http.get<Advice>("../assets/advicelist.json")
  }
  
}
