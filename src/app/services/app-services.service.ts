import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User, Car } from '../_models';
@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  url: any = "http://192.168.1.6:3000";

  constructor(private httpClient: HttpClient) { }

  public getRecentCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/latestcars`);
  }
  public MostViewsCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/mostviewscars`);
  }

}
