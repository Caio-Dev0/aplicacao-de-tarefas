import { useEffect, useState } from 'react'
import './App.css'
import Home from './home'

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

  return (
    <>
    <form className="task-form" onSubmit={handleSubmitForm}>
            <input className='task-form__input' value={nameTask} onChange={(e) => setNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>

    <Home tasks={tasks} handleDeleteTask={handleDeleteTask} modal={modal} handleEditTask={handleEditTask} editTask={{name: taskEdit?.name ?? "", id: taskEdit?.id ?? 0}} handleChangeTask={handleChangeTask} handleUpdateTasks={handleUpdateTasks} handleCloseModal={handleCloseModal}/>

    </>
  )
}

export default App
