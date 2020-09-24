import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../todo";
import "./Todolist.css";

const ToDoList = () => {
  let todos = useSelector((state) => state);
  return (
    <div className="todolist">
      {todos < 1 ? (
        <h3 className="todolist_notask">No Task Assigned Yet</h3>
      ) : (
        todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo} />;
        })
      )}
    </div>
  );
};

export default ToDoList;
