import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
// FC = Functional Component
// 功能组件
// SFC = Stateless Functional Component (已弃用)
// 无状态功能组件(已弃用)

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
