import React from "react";
import "./App.css";
import Header from "./components/header";
import ToDoInput from "./components/todoinput";
import ToDoList from "./components/todolist";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ToDoInput />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
