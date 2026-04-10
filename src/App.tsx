import { useState } from 'react'
import './App.css'
import Home from './home'

export interface Task{
  id: number,
  name: string
}


function App() {
  const [nameTask, setNameTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])


  function handleSubmitForm(e: any): void{
    e.preventDefault()
    if(nameTask === ""){
      return
    }
    setTasks(e => [...e, {id: tasks.length + 1, name: nameTask}])
    setNameTask("")
  }

  return (
    <>
    <form className="task-form" onSubmit={handleSubmitForm}>
            <input className='task-form__input' value={nameTask} onChange={(e) => setNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>

    <Home tasks={tasks}/>

    </>
  )
}

export default App
