import React, { FC, useState } from 'react'

interface IProps {
    addTask: (title: string) => void
}

const AddTask: FC<IProps> = props => {
    const [input, setInput] = useState<string>()

    const handleAddTaskClick = () => !!input.trim() && props.addTask(input)

    return (
        <div>
            <input onChange={e => setInput(e.target.value)} />
            <button onClick={handleAddTaskClick}>Add task</button>
        </div>
    )
}

export default AddTask
