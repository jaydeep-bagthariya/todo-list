import React, { useState } from "react";

const Form = (props) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.setTodos((prevTodos) => [
      ...prevTodos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (event) => {
    props.setStatus(event.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button
        disabled={!inputText}
        onClick={submitHandler}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
