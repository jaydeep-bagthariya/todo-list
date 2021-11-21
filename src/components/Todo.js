import React from "react";

const Todo = (props) => {
  const deleteHandler = (event) => {
    props.deleteTodo(props.todo);
  };

  const completeHandler = () => {
    props.completeTodo(props.todo);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
