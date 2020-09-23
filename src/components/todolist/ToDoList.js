import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../todo";
import "./Todolist.css";

const ToDoList = () => {
  let todos = useSelector((state) => state);
  return (
    <div className="todolist">
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
