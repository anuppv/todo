import React, {useState} from 'react'

import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false},]);
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        );
    }
    
  return (
    <div className='TodoList'>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo) => (
            <Todo ey={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete} />
        )
    )}
        
    </div>
  );
};
