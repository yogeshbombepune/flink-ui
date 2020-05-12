import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { JobsComponent } from './jobs/jobs.component';
import { RunningComponent } from './jobs/running/running.component';
import { CompletedComponent } from './jobs/completed/completed.component';
import { OverviewResolveServiceService } from './overview/overview-resolve-service.service';


const routes: Routes = [
  { path: '', redirectTo: '/home/overview', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'prefix'},
    { path: 'overview', component: OverviewComponent, resolve: [OverviewResolveServiceService] },
    { path: 'jobs', component: JobsComponent, children: [
      { path: 'running', component: RunningComponent},
      { path: 'completed', component: CompletedComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
