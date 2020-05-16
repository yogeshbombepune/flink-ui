import { Injectable } from '@angular/core';
import { Job } from './job';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OverviewCommonService } from './overview-common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListResolverService implements Resolve<Job[]>{

  constructor(private service: OverviewCommonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> | Promise<Job[]> | any {
    return this.service.getJobs('http://192.168.56.110:8081/jobs/overview');
}
}