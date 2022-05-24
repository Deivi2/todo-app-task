import { ITask, ITasks, ITasksCategorizedByActiveAndCompleted } from 'Types'

/**
 * @param ITasks
 * @returns ITasksCategorizedByActiveAndCompleted
 */

export function categorizeTasksByActiveAndCompleted(tasks: ITasks = []) {
    return tasks.reduce(
        (acc, cur) => {
            acc[cur.done ? 'completed' : 'active'].push(cur)
            return acc
        },
        { active: [], completed: [], total: tasks.length } as ITasksCategorizedByActiveAndCompleted
    )
}

/**
 * @param ITasks
 * @param ITask
 * @returns ITasks with task moved to completed
 */

export function moveTaskToDone(tasks: ITasks, task: ITask): ITasks {
    const newTasks: ITasks = JSON.parse(JSON.stringify(tasks))
    const foundTaskIndex = tasks.findIndex((t: ITask) => t === task)
    const [foundTask] = newTasks.splice(foundTaskIndex, 1)
    foundTask.done = true
    newTasks.unshift(foundTask)
    return newTasks
}

/**
 * @param ITasks
 * @param title - string
 * @returns ITasks with new task
 */

export function addTaskToTop(tasks: ITasks, title: string): ITasks {
    const newTasks = JSON.parse(JSON.stringify(tasks))
    newTasks.unshift({ title, done: false })
    return newTasks
}
