export class OverviewModel {

        public taskmanagers: number;
        public slotsTotal: number;
        public slotsAvailable: number;
        public jobsRunning: number;
        public jobsFinished: number;
        public jobsCancelled: number;
        public jobsFailed: number;
        public flinkVersion: string;
        public flinkCommit: string;

        constructor(taskmanagers: number, slotsTotal: number,
                    slotsAvailable: number,  jobsRunning: number,
                    jobsFinished: number, jobsCancelled: number,
                    jobsFailed: number, flinkVersion: string,
                    flinkCommit: string){
                this.taskmanagers = taskmanagers;
                this.slotsTotal = slotsTotal;
                this.slotsAvailable = slotsAvailable;
                this.jobsRunning = jobsRunning;
                this.jobsFinished = jobsFinished;
                this.jobsCancelled = jobsCancelled;
                this.jobsFailed = jobsFailed;
                this.flinkVersion = flinkVersion;
                this.flinkCommit = flinkCommit;
        }
}
