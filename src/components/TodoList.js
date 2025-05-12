import React from 'react';

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(index)}
          />
          <span>{todo.text}</span>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList; 