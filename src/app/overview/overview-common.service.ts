import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Subject } from 'rxjs';
import { OverviewModel } from './overview-model';
import { map, tap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Job } from './job';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class OverviewCommonService {
  jobs: Job[];
  updatedOverview = new Subject<OverviewModel>();
  updatedJobs = new Subject<Job[]>();
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

  getJobs(url: string): any {
    return this.service.getService(url)
      .pipe(map(jobs => {
        const jobArray = jobs['jobs'];
        jobArray.forEach(obj => {
            const taskObject = this.getTask(obj.tasks);
            const job = this.getJobObject(obj, taskObject);
            this.jobs.push(job);
          });
        return jobArray;
    }), tap(jobs => {
      this.updatedJobs.next(jobs);
    }))
    .subscribe(obj => {
      console.log('Getting data from serivce');
    // tslint:disable-next-line: no-shadowed-variable
    }, (error: Error) => {
      console.error('Network Error' + error.message);
    });
  }

getJobObject(obj: object, taskObject: Task): Job{
    return new Job(obj['jid'],
            obj['name'],
            obj['state'],
             obj['start-time'],
              obj['end-time'],
              obj['duration'],
              obj['last-modification'],
              taskObject);
  }

  getTask(task: object) {
    return new Task(task['total'],
    task['created'],
    task['scheduled'],
    task['deploying'],
    task['running'],
    task['finished'],
    task['canceling'],
     task['canceled'],
     task['failed'],
     task['reconciling']);
  }

}
