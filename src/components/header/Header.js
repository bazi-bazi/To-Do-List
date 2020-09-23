import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__items">
          <h1 className="header__title">Task Manager</h1>
          <div className="header__tabs">
            <p className="header__tabs__item">list items: 22</p>
            <p className="header__tabs__item">active: 32</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
