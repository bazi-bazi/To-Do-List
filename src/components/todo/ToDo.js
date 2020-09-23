import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";
import "./todo.css";

const ToDo = ({ todo }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <li className="list-item">
        <span>{todo.name}</span>
        <div>
          <button className="btn-done task-btn">
            <i className="fas fa-check"></i>
          </button>
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="btn-delete task-btn"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDo;
