import { useEffect, useState } from 'react'
import './App.css'
import Home from './home'
import FormTask from './formTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export interface Task{
  id: number,
  name: string
}


function App() {
  const [nameTask, setNameTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks") ?? "[]"))
  const [modal, setModal] =useState<boolean>(false)
  const [taskEdit, setTaskEdit] = useState<Task | null> (null)
 

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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

  function handleEditTask(idTask: number, nameTask: string): void{
    setTaskEdit({id: idTask, name: nameTask})
    setModal(true)
  }

  function handleChangeTask(nameTask: string): void{
    setTaskEdit({id: taskEdit!.id, name: nameTask})
  }

  function handleUpdateTasks(tasks: Task[]){
    setTasks(tasks)
    setModal(false)
  }

  function handleCloseModal(): void{
    setModal(false)
  }

  function handleSaveNameTask(e: string){
    setNameTask(e)
  }

  return (
    <BrowserRouter>
    <>
    
    
    </>
    <Routes>
      <Route path='/' element={<Home tasks={tasks} handleDeleteTask={handleDeleteTask} modal={modal} handleEditTask={handleEditTask} editTask={{name: taskEdit?.name ?? "", id: taskEdit?.id ?? 0}} handleChangeTask={handleChangeTask} handleUpdateTasks={handleUpdateTasks} handleCloseModal={handleCloseModal}/>
}></Route>
      <Route path='/formTask' element={<FormTask handleSubmitForm={handleSubmitForm} nameTask={nameTask} handleSaveNameTask={handleSaveNameTask}/>
}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
