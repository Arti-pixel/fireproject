import React, { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";

//!убрать StrictMode перед деплоем/билдом

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Context.Provider value={{ userInfo: new UserStore() }}>
      <App />
    </Context.Provider>
  </>
);

//StrictMode
