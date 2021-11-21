import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const deletTodoHandler = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeTodoHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Jaydeep's todo list</h1>
      </header>
      <Form setTodos={setTodos} setStatus={setStatus} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deletTodoHandler}
        completeTodo={completeTodoHandler}
      />
    </div>
  );
}

export default App;
