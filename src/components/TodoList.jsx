import Todo from "./Todo.jsx";
export default function TodoList({ filteredTodos,setTodos,todos}){
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo=>(
                    <Todo text={todo.text} todo={todo} id={todo.id} key={todo.id} setTodos={setTodos} todos={todos}/>
                ))}
            </ul>
        </div>)
}