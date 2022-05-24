export interface ITask {
    title: string
    done: boolean
}
export type ITasks = Array<ITask>

export interface ITasksCategorizedByActiveAndCompleted {
    active: ITasks
    completed: ITasks
    total: number
}
