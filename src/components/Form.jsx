export default function Form({setInput, todos, setTodos, input,setStatus}){
    function inputHandler(e){
        setInput(e.target.value)
    }
    function submitTodo(e) {
        e.preventDefault()
        setTodos([
            ...todos, {text: input, completed: false, id: Math.random()*1000}
            ])
        setInput("")
    }
    function statusHandler(e){
        setStatus(e.target.value)
    }
    return (<form>
        <input onChange={inputHandler} value={input} type="text" className="todo-input"/>
        <button onClick={submitTodo} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>)
}