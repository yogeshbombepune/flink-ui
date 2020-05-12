import { Component, OnInit } from '@angular/core';
import { OverviewModel } from './overview-model';
import { Subject } from 'rxjs';
import { OverviewCommonService } from './overview-common.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  overview: OverviewModel;

  constructor(private overviewService: OverviewCommonService) {   }

  ngOnInit(): void {
    this.overview = this.overviewService.getOverview('http://192.168.56.110:8081/overview').subscribe();
    this.overviewService.updatedOverview.subscribe((overview: OverviewModel) => {
       console.log('OverviewComponent ngOnInit call');
       this.overview = overview;
     });
  }

}
