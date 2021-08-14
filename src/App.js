import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route components={Login} path="/login" />
        <Route components={ChatRoom} path="/chat" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
