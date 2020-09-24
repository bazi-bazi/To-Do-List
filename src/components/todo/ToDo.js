import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actions";
import "./todo.css";

const ToDo = ({ todo }) => {
  const [check, setCheck] = useState(false);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  const setUnsetCheck = () => setCheck(!check);
  return (
    <div>
      <li className="list-item">
        {editable ? (
          <input
            type="text"
            value={name}
            className="todoinput"
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span>{todo.name}</span>
        )}
        {check ? <p style={{ color: "#06d6a0" }}>Done</p> : <p>Proceed...</p>}
        <div>
          <button className="btn-done task-btn" onClick={setUnsetCheck}>
            {check ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-check" style={{ color: "#5765" }}></i>
            )}
          </button>
          <button
            type="submit"
            className="btn-edit task-btn"
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
              if (editable) {
                setName(todo.name);
              }

              setEditable(!editable);
            }}
          >
            {editable ? (
              <span className="updatetext">update</span>
            ) : (
              <i className="fas fa-pen"></i>
            )}
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
