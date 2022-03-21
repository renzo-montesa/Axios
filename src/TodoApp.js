import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";
export default function TodoApp() {
  return (
    <div className="todo-app container p-5">
        <div className="row">
            <h1 className="mt-3 mb-3 fw-bold text-center">Todo List </h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    </div>
  );
}