import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Load todos from localStorage when the app starts
    useEffect(() => {
        const getLocalTodos = () => {
            const todoLocal = localStorage.getItem("todos");
            if (todoLocal) {
                setTodos(JSON.parse(todoLocal)); // Load saved todos into state
            }
        };
        getLocalTodos();
    }, []); // Runs only once on mount

    // Save todos to localStorage whenever todos state changes
    useEffect(() => {
        const saveLocalTodos = () => {
            if (todos.length > 0) {
                localStorage.setItem("todos", JSON.stringify(todos)); // Save todos
            }
        };
        saveLocalTodos();
    }, [todos]); // Runs whenever `todos` changes

    // Filter todos whenever `todos` or `status` changes
    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case "completed":
                    setFilteredTodos(todos.filter((todo) => todo.completed === true));
                    break;
                case "uncompleted":
                    setFilteredTodos(todos.filter((todo) => todo.completed === false));
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        filterHandler();
    }, [todos, status]); // Runs whenever `todos` or `status` changes

    return (
        <div className="App">
            <header>
                <h1>To Do List</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                setInput={setInput}
                input={input}
                setStatus={setStatus}
            />
            <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default App;
