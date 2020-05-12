import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OverviewModel } from './overview-model';
import { Observable } from 'rxjs';
import { OverviewCommonService } from './overview-common.service';


@Injectable({
  providedIn: 'root'
})
export class OverviewResolveServiceService implements Resolve<OverviewModel>{

  constructor(private service: OverviewCommonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OverviewModel> | Promise<OverviewModel> | any {
    console.log('OverviewResolveServiceService called');
    return this.service.getOverview('http://192.168.56.110:8081/overview');
  }
}
