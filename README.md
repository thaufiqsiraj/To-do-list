# Todo List App

A simple **Todo List** application built with **React** that allows users to add, complete, and filter tasks. This app uses **localStorage** to persist the tasks even after a page refresh.

## Features

- **Add Todo**: Users can input a task and add it to the todo list.
- **Complete Todo**: Users can mark a todo as completed.
- **Filter Todos**: Filter the tasks by "All", "Completed", or "Uncompleted".
- **Persistence**: The todos persist in the browser’s `localStorage`, so data is not lost on page refresh.
## Screenshots
![To Do List App.jpeg](src/assets/To%20Do%20List%20App.jpeg)
## Technologies Used

- **React**: For building the interactive UI.
- **localStorage**: For storing the todos in the browser’s local storage to persist data across refreshes.
- **CSS**: For basic styling (tailored for your use case).

## Learning Resources
I built this Todo List app by following a tutorial from YouTube. It was an excellent way to learn React and how to manage state and localStorage effectively. Here's the link to the video where I learned this project:
[Build A Todo App With REACT | React Project For Beginners (FULL).](https://www.youtube.com/watch?v=pCA4qpQDZD8)

## Setup and Installation

Follow these steps to set up the Todo List app on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-list-app.git
```

### 2. Install Dependencies

Navigate into the project directory and install the dependencies:

```bash
cd todo-list-app
bun install
```

### 3. Run the Application

Start the development server:

```bash
bun run dev
```

This will open the app in your browser at `http://localhost:5173`.

## How It Works

### State Management

- **Input Field (`input`)**: Keeps track of the value typed into the input field for a new todo.
- **Todos (`todos`)**: An array that holds all the todos.
- **Status (`status`)**: Manages the filter state to filter todos by "all", "completed", or "uncompleted".
- **Filtered Todos (`filteredTodos`)**: An array that holds todos after being filtered based on the selected status.

### Key Functions

- **`getLocalTodos`**: Fetches todos from `localStorage` on component mount (when the app is loaded).
- **`saveLocalTodos`**: Saves the current todos state to `localStorage` whenever it changes.
- **`filterHandler`**: Filters the todos based on the selected `status`.

### useEffect Hooks

- The `useEffect` hooks ensure that:
    - The todos are loaded from `localStorage` when the app starts.
    - The todos are saved to `localStorage` whenever the `todos` state changes.
    - The todos are filtered based on the selected status ("all", "completed", or "uncompleted").



