import React from 'react'
import { useState } from 'react'

function TaskManager () {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setTasks([...tasks, inputValue])
    setInputValue('')
  }
  return (
    <div>
      <h1>Task Manager</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
        <li key={task}>{task}
        <button>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager;
