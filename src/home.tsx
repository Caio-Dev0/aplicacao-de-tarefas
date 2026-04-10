import type { Task } from "./App"

function Home({tasks}: {tasks: Task[]}){
    console.log(tasks)

    return(
    <>    
    <header>
        <h1>Aplicação Tarefas</h1>
    </header>
    <ul>
      {tasks.map(a => {
        return <li key={a.id}>{a.name}</li>
        })}
    </ul>
    </>
    )
}

export default Home