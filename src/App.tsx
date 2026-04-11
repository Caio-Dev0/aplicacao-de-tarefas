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
  const [modal, setModal] =useState<boolean>(false)
  const [editName, setEditName] = useState<string>("")

  function handleSubmitForm(e: any): void{
    e.preventDefault()
    if(nameTask === ""){
      return
    }
    setTasks(e => [...e, {id: tasks.length + 1, name: nameTask}])
    setNameTask("")
  }

  function handleDeleteTask(id: number): void{
    setTasks(prev => prev.filter(task => task.id !== id))
    setModal(false)
    
  }

  function handleEditTask(nameTask: string): void{
    setEditName(nameTask)
    setModal(prev => !prev)
  }

  function handleChangeTask(nameTask: string): void{
    setEditName(nameTask)
  }

  return (
    <>
    <form className="task-form" onSubmit={handleSubmitForm}>
            <input className='task-form__input' value={nameTask} onChange={(e) => setNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>

    <Home tasks={tasks} handleDeleteTask={handleDeleteTask} modal={modal} handleEditTask={handleEditTask} editName={editName} handleChangeTask={handleChangeTask}/>

    </>
  )
}

export default App
