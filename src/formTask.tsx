import { useNavigate } from "react-router-dom"

function FormTask({handleSubmitForm, nameTask, handleSaveNameTask}: {handleSubmitForm(e: any): void, nameTask: string, handleSaveNameTask(e: string): void}){
 const navigate = useNavigate()
    return(
    <form className="task-form" onSubmit={(e) =>{
        handleSubmitForm(e)
        navigate("/")
        
    }}>
        <label htmlFor="task-form__input">Adicione sua tarefa</label>
            <input className='task-form__input' id="task-form__input" value={nameTask} onChange={(e) => handleSaveNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>
 )
}

export default FormTask