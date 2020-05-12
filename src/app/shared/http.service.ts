import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OverviewModel } from '../overview/overview-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getService(url: string) {
    console.log('calling ' + url);
    return this.httpClient.get(url);
  }
}
