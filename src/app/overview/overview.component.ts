import { Component, OnInit } from '@angular/core';
import { OverviewModel } from './overview-model';
import { Subject } from 'rxjs';
import { OverviewCommonService } from './overview-common.service';
import { Job } from './job';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  overview: OverviewModel;
  jobs: Job[];

  constructor(private overviewService: OverviewCommonService) {   }

  ngOnInit(): void {
    this.overviewService.updatedOverview.subscribe((overview: OverviewModel) => {
       this.overview = overview;
     });
    this.overviewService.updatedJobs.subscribe((jobs: Job[]) => {
      this.jobs = jobs;
     });
  }

}
