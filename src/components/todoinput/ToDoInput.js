import React, { useState } from "react";
import "./Todoinput.css";
import { addTodo } from "../../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const ToDoInput = () => {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <form className="form">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Add Task..."
          required
          className="task-input"
        />
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(
                addTodo({
                  id: { uuid },
                  name: name,
                })
              );
              setName("");
            }}
            type="submit"
            className="btn add_task_btn"
          >
            Edd Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoInput;
