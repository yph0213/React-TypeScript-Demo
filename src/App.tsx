import React from "react";
import logo from "./logo.svg";
import "./App.css";

// FC = Functional Component
// 功能组件
// SFC = Stateless Functional Component (已弃用)
// 无状态功能组件(已弃用)

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
