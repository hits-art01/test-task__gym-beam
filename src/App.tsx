import React from "react";
import { RouteType } from "./types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router/routes";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
