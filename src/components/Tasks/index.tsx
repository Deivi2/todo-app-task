import { FC, useMemo } from 'react'
import { ITask, ITasks } from 'Types'
import { categorizeTasksByActiveAndCompleted } from 'utils'
import { Active, Done } from './styles'

interface IProps {
    tasks: ITasks
    completeTask: (task: ITask) => void
}

const Tasks: FC<IProps> = props => {
    //To get active, completed, and length of task we can use function that returns categorized task data
    const categorizedTasks = useMemo(() => categorizeTasksByActiveAndCompleted(props.tasks), [props.tasks])

    return (
        <div>
            {categorizedTasks.active.map((task: ITask, i: number) => (
                <Active key={`${i}-${task.title}`} onClick={() => props.completeTask(task)}>
                    {task.title}
                </Active>
            ))}
            {categorizedTasks.completed.map((task: ITask, i: number) => (
                <Done key={`${i}-${task.title}`}>{task.title}</Done>
            ))}
            <div>{categorizedTasks.total}</div>
        </div>
    )
}

export default Tasks
