import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <ToDoForm addToDo={addToDo} />
            <ToDoList todos={todos} />
        </div>
    );
}

export default App;