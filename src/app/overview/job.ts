import { Task } from './task';

export class Job {
    private id: string;
    private name: string;
    private state: string;
    private startDate: Date;
    private endDate: Date;
    private duration: number;
    private lastModification: Date;
    private task: Task;

    constructor(id: string,
                name: string,
                state: string,
                startDate: Date,
                endDate: Date,
                duration: number,
                lastModification: Date,
                task: Task){
            this.id = id;
            this.name = name;
            this.startDate = startDate;
            this.state = state;
            this.endDate = endDate;
            this.duration = duration;
            this.lastModification = lastModification;
            this.task = task;
        }
}
