import AddTask from 'components/AddTask'
import { useMemo, useState } from 'react'
import { addTaskToTop, moveTaskToDone } from 'utils'
import Tasks from './components/Tasks'
import { ITask, ITasks } from './Types'

function App() {
    // useMemo used to cache data
    const someTasks = useMemo<ITasks>(
        () => [
            { title: 'Wash dishes', done: false },
            { title: 'Read book', done: false },
            { title: 'Get some sleep', done: true },
        ],
        []
    )

    //On component mount embed task to state through parameter without addition rerendering
    const [tasks, setTasks] = useState<ITasks>(someTasks)

    //On clicking task we setting state with data where task found by it instance and it done value changed to true
    const completeTask = useMemo(() => (task: ITask) => setTasks(moveTaskToDone(tasks, task)), [tasks])

    //On add task button adding task to top of array
    const addTask = useMemo(() => (title: string) => setTasks(addTaskToTop(tasks, title)), [tasks])

    return (
        <>
            <Tasks tasks={tasks} completeTask={completeTask} />
            <AddTask addTask={addTask} />
        </>
    )
}

export default App
