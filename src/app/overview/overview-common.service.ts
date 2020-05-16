import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Subject } from 'rxjs';
import { OverviewModel } from './overview-model';
import { map, tap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class OverviewCommonService {
  updatedOverview = new Subject<OverviewModel>();
  constructor(private service: HttpService) { }

  getOverview(url: string): any {
    console.log('OverviewCommonService called');
    return this.service.getService(url)
      .pipe(map(overview => {
          return new OverviewModel(
          overview['taskmanagers'],
          overview['slots-total'],
          overview['slots-available'],
          overview['jobs-running'],
          overview['jobs-finished'],
          overview['jobs-cancelled'],
          overview['jobs-failed'],
          overview['flink-version'],
          overview['flink-commit']);
    }), tap(overview => {
      this.updatedOverview.next(overview);
    }))
    .subscribe(obj => {
      console.log('Getting data from serivce');
    // tslint:disable-next-line: no-shadowed-variable
    }, (error: Error) => {
      console.error('Network Error' + error.message);
    });
  }

}
