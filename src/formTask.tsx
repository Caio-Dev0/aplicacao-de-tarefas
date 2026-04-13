function FormTask({handleSubmitForm, nameTask, handleSaveNameTask}: {handleSubmitForm(e: any): void, nameTask: string, handleSaveNameTask(e: string): void}){
 return(
    <form className="task-form" onSubmit={handleSubmitForm}>
            <input className='task-form__input' value={nameTask} onChange={(e) => handleSaveNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>
 )
}

export default FormTask