import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            completeTodo={props.completeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
