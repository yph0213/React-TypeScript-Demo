import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import "./index.css";
import reducer from "./reducer";
import * as serviceWorker from "./serviceWorker";

// 1、创建 store
const store = createStore(reducer);

ReactDOM.render(
  // 2、然后使用react-redux的Provider将props与容器连通起来
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
