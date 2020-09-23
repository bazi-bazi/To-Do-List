import React from "react";
import "./todo.css";

const ToDo = () => {
  return (
    <div>
      <li className="list-item">
        <span>Tile </span>
        <div>
          <button className="btn-done task-btn">
            <i className="fas fa-check"></i>
          </button>
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
          <button className="btn-delete task-btn">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDo;
