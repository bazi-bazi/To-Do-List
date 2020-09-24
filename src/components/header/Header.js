import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  let todos = useSelector((state) => state);
  return (
    <div>
      <header className="header">
        <div className="header__items">
          <h1 className="header__title">Task Manager</h1>
          <div className="header__tabs">
            <p className="header__tabs__item">Active Tasks: {todos.length}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
