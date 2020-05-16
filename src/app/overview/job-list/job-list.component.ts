import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input() jobs: Job[];

  constructor() { }

  ngOnInit(): void {
  }

}
