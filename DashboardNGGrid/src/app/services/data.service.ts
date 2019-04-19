import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private broadcastData = new Subject<string>();

  broadcastData$ = this.broadcastData.asObservable();

  selectedValue(value: any) {
    this.broadcastData.next(value);
  }

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {

    return this.http.get('http://localhost:3000/insuranceData');
  }
}
