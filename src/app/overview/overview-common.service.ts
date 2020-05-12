import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Subject } from 'rxjs';
import { OverviewModel } from './overview-model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverviewCommonService {
  private overview: OverviewModel;
  updatedOverview = new Subject<OverviewModel>();
  constructor(private service: HttpService) { }

  getOverview(url: string): any {
    console.log('OverviewCommonService called');
    return this.service.getService(url).pipe(map(overview => {
      return new OverviewModel(overview['taskmanagers'],
        overview['slots-total'],
        overview['slots-available'],
        overview['jobs-running'],
        overview['jobs-finished'],
        overview['jobs-cancelled'],
        overview['jobs-failed'],
        overview['flink-version'],
        overview['flink-commit']);
    }), tap(obj => {
      this.overview = obj;
      console.log('tap executed');
      console.log(this.overview);
      this.trigger(obj);
    }));
  }

  trigger(overview: OverviewModel){
    console.log('trigger executed');
    this.updatedOverview.next(overview);
    console.log('trigger complete');
  }
}
