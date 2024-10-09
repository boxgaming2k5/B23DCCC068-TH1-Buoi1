import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTodo(task.id))} />
            {task.text}
            <button onClick={() => dispatch(removeTodo(task.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
