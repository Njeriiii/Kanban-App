import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [tasks, setTasks] = useState([])

    const addTask = task =>{
        if(!task.text || /^\s*$/.test(task.text)) {
            return
        }

        const newTasks = [task,...tasks]

        setTasks(newTasks);
        console.log(tasks,...tasks)
    };

  return (
    <div>
        <h1> What's the plan for today?</h1>
        <TodoForm onSubmit={addTask} />
    </div>
  )
}

export default TodoList