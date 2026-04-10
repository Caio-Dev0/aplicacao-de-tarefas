import type { Task } from "./App"

function Home({tasks, handleDeleteTask, modal, handleEditTask}: {tasks: Task[], handleDeleteTask(id: number): void, modal: boolean, handleEditTask(): void}){


    return(
    <>    
    <header>
        <h1>Aplicação Tarefas</h1>
    </header>
    <ul>
      {tasks.map(a => {
        return <li key={a.id}>{a.name} <svg onClick={() => handleDeleteTask(a.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-delete-icon lucide-delete"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/></svg> <svg onClick={() =>{ handleEditTask()
        }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg></li>
        })}
    </ul>
        {modal && <div>Tá funcionando</div>}
    
    </>
    )
}

export default Home