import React from "react";
import "./Todoinput.css";

const ToDoInput = () => {
  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Add Task..."
          required
          className="task-input"
        />
        <div className="buttons">
          <button type="submit" className="btn add_task_btn">
            Edd Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoInput;
