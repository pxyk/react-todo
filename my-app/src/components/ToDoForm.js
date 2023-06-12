import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addToDo(todo);
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit" className="black-btn">Add</button>
        </form>
    );
}

export default ToDoForm;
