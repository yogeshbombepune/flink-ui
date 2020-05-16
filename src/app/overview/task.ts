export class Task {
    private created: number;
    private total: number;
    private scheduled: number;
    private deploying: number;
    private running: number;
    private finished: number;
    private canceling: number;
    private canceled: number;
    private failed: number;
    private reconciling: number;

    constructor(
        created: number,
        total: number,
        scheduled: number,
        deploying: number,
        running: number,
        finished: number,
        canceling: number,
        canceled: number,
        failed: number,
        reconciling: number
    ){
        this.created = created;
        this.total = total;
        this.scheduled = scheduled;
        this.deploying = deploying;
        this.running = running;
        this.finished = finished;
        this.canceling = canceling;
        this.canceled = canceled;
        this.failed = failed;
        this.reconciling = reconciling;
    }
}
