import React from "react";
import ClassCounter from "./components/ClassCounter";
import ClassHeader from "./components/ClassHeader";
import ClassMenu from "./components/ClassMenu";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ClassHeader />
        <div className="content">
          <ClassMenu />
          <ClassCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
