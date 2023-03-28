import React from 'react';

function Todo({ todo, todos, setTodos }) {
  function deleteTodoHandler() {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  }
  function completeTodoHandler() {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.text}

      </li>
      <button onClick={completeTodoHandler} className="complete-btn">
        <i className="fa fa-check" />
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fa fa-trash" />
      </button>
    </div>
  );
}

export default Todo;
